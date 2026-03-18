package com.innocode.portfolio.controller;

import com.innocode.portfolio.entity.Experience;
import com.innocode.portfolio.service.ExperienceService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/experiences")
@RequiredArgsConstructor
public class ExperienceController {

    private final ExperienceService experienceService;

    @GetMapping
    public List<Experience> getAll() {
        return experienceService.getAll();
    }
}
