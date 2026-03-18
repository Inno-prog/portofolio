package com.innocode.portfolio.controller;

import com.innocode.portfolio.dto.ApiResponse;
import com.innocode.portfolio.dto.ContactRequest;
import com.innocode.portfolio.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<ApiResponse> send(@Valid @RequestBody ContactRequest request) {
        contactService.save(request);
        return ResponseEntity.ok(new ApiResponse(true, "Message envoyé avec succès !"));
    }
}
