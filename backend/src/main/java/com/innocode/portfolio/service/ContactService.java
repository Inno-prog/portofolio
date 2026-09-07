package com.innocode.portfolio.service;

import com.innocode.portfolio.dto.ContactRequest;
import com.innocode.portfolio.entity.ContactMessage;
import com.innocode.portfolio.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ContactService {

    private final ContactMessageRepository contactMessageRepository;
    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String mailUsername;

    @Value("${app.contact.to}")
    private String contactToEmail;

    public void save(ContactRequest request) {
        ContactMessage msg = new ContactMessage();
        msg.setName(request.getName());
        msg.setEmail(request.getEmail());
        msg.setSubject(request.getSubject());
        msg.setMessage(request.getMessage());
        contactMessageRepository.save(msg);

        sendEmailNotification(request);
    }

    private void sendEmailNotification(ContactRequest request) {
        try {
            SimpleMailMessage email = new SimpleMailMessage();
            email.setTo(contactToEmail);
            email.setFrom(mailUsername);
            email.setSubject("Nouveau message de contact: " + (request.getSubject() != null ? request.getSubject() : "Sans sujet"));
            email.setText(
                "Nouveau message reçu depuis le portfolio:\n\n" +
                "Nom: " + request.getName() + "\n" +
                "Email: " + request.getEmail() + "\n" +
                "Sujet: " + (request.getSubject() != null ? request.getSubject() : "Non spécifié") + "\n\n" +
                "Message:\n" + request.getMessage()
            );

            mailSender.send(email);
            log.info("Email envoye avec succes pour le message de {}", request.getEmail());
        } catch (Exception e) {
            log.error("Erreur lors de l'envoi de l'email: {}", e.getMessage(), e);
        }
    }
}
