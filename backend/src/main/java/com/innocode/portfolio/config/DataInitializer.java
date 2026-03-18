package com.innocode.portfolio.config;

import com.innocode.portfolio.entity.Experience;
import com.innocode.portfolio.entity.Project;
import com.innocode.portfolio.repository.ExperienceRepository;
import com.innocode.portfolio.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final ProjectRepository projectRepository;
    private final ExperienceRepository experienceRepository;

    @Override
    public void run(String... args) {
        if (projectRepository.count() == 0) {
            projectRepository.saveAll(List.of(
                project("E-Commerce Mobile App",
                    "Application mobile e-commerce complète avec panier, paiement et suivi de commandes.",
                    List.of("Flutter", "Spring Boot", "PostgreSQL", "Stripe"),
                    "https://github.com/innocode", null, true),
                project("Dashboard Analytics",
                    "Tableau de bord analytique en temps réel avec graphiques interactifs et rapports.",
                    List.of("Angular", "Node.js", "MongoDB", "Chart.js"),
                    "https://github.com/innocode", "#", true),
                project("API REST Gestion RH",
                    "API REST complète pour la gestion des ressources humaines avec authentification JWT.",
                    List.of("Spring Boot", "Java", "MySQL", "JWT"),
                    "https://github.com/innocode", null, false),
                project("App de Livraison",
                    "Application de livraison avec géolocalisation en temps réel et notifications push.",
                    List.of("React Native", "Firebase", "Google Maps API"),
                    "https://github.com/innocode", null, true)
            ));
        }

        if (experienceRepository.count() == 0) {
            experienceRepository.saveAll(List.of(
                experience("Freelance", "Développeur Web & Mobile Full Stack", "2022-01", null, true,
                    "Développement d'applications web et mobiles pour divers clients. Conception d'architectures backend avec Spring Boot et frontends Angular/React.",
                    List.of("Angular", "Spring Boot", "Flutter", "React Native")),
                experience("Startup Tech", "Développeur Frontend Angular", "2021-03", "2021-12", false,
                    "Développement et maintenance d'applications web Angular. Intégration d'APIs REST et optimisation des performances.",
                    List.of("Angular", "TypeScript", "RxJS", "Tailwind CSS"))
            ));
        }
    }

    private Project project(String title, String desc, List<String> techs, String github, String live, boolean featured) {
        Project p = new Project();
        p.setTitle(title);
        p.setDescription(desc);
        p.setTechnologies(techs);
        p.setGithubUrl(github);
        p.setLiveUrl(live);
        p.setFeatured(featured);
        return p;
    }

    private Experience experience(String company, String position, String start, String end,
                                   boolean current, String desc, List<String> techs) {
        Experience e = new Experience();
        e.setCompany(company);
        e.setPosition(position);
        e.setStartDate(start);
        e.setEndDate(end);
        e.setCurrent(current);
        e.setDescription(desc);
        e.setTechnologies(techs);
        return e;
    }
}
