package com.innocode.portfolio.controller;

import com.innocode.portfolio.entity.ServiceItem;
import com.innocode.portfolio.service.ServiceItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/services")
@RequiredArgsConstructor
public class ServiceItemController {

    private final ServiceItemService service;

    @GetMapping
    public List<ServiceItem> getAll() {
        return service.getAll();
    }
}
