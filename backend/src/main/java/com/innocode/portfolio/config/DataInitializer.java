package com.innocode.portfolio.config;

import com.innocode.portfolio.entity.Experience;
import com.innocode.portfolio.entity.Project;
import com.innocode.portfolio.entity.ServiceItem;
import com.innocode.portfolio.repository.ExperienceRepository;
import com.innocode.portfolio.repository.ProjectRepository;
import com.innocode.portfolio.repository.ServiceItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final ProjectRepository projectRepository;
    private final ExperienceRepository experienceRepository;
    private final ServiceItemRepository serviceItemRepository;

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

        if (serviceItemRepository.count() == 0) {
            serviceItemRepository.saveAll(List.of(
                service("web", "Développement Web",
                    "Sites et applications web modernes, performants et responsive. Du portfolio vitrine à l'application métier complexe.",
                    List.of("Angular", "React", "Vue.js", "Tailwind"), 1),
                service("phone_android", "Applications Mobiles",
                    "Applications mobiles natives et cross-platform pour iOS et Android. UX soignée et performance optimale.",
                    List.of("Flutter", "React Native", "iOS", "Android"), 2),
                service("storage", "Backend & API",
                    "Conception d'APIs REST robustes et sécurisées. Architecture microservices, authentification JWT, bases de données.",
                    List.of("Spring Boot", "Node.js", "PostgreSQL", "Docker"), 3),
                service("cloud", "DevOps & Cloud",
                    "Déploiement continu, containerisation Docker, orchestration Kubernetes. Infrastructure scalable et sécurisée.",
                    List.of("Docker", "Kubernetes", "AWS", "CI/CD"), 4),
                service("palette", "UI/UX Design",
                    "Conception d'interfaces utilisateur intuitives et esthétiques. Maquettes, prototypes et design systems.",
                    List.of("Figma", "Adobe XD", "Design System"), 5),
                service("support", "Maintenance & Support",
                    "Maintenance évolutive et corrective, monitoring, mises à jour de sécurité et support technique.",
                    List.of("Monitoring", "SEO", "Performance", "Security"), 6)
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

    private ServiceItem service(String icon, String title, String desc, List<String> tags, int order) {
        ServiceItem s = new ServiceItem();
        s.setIcon(icon);
        s.setTitle(title);
        s.setDescription(desc);
        s.setTags(tags);
        s.setOrder(order);
        return s;
    }
}

