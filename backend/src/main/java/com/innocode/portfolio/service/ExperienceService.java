package com.innocode.portfolio.service;

import com.innocode.portfolio.entity.Experience;
import com.innocode.portfolio.repository.ExperienceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ExperienceService {

    private final ExperienceRepository experienceRepository;

    public List<Experience> getAll() {
        return experienceRepository.findAll();
    }
}
