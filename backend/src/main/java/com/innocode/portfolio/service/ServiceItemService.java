package com.innocode.portfolio.service;

import com.innocode.portfolio.entity.ServiceItem;
import com.innocode.portfolio.repository.ServiceItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ServiceItemService {

    private final ServiceItemRepository repository;

    public List<ServiceItem> getAll() {
        return repository.findAllByOrderByOrderAsc();
    }
}
