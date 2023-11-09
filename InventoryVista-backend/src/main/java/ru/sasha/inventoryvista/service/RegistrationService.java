package ru.sasha.inventoryvista.service;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.UserDao;
import ru.sasha.inventoryvista.dto.request.UserRegistrationRequestDto;
import ru.sasha.inventoryvista.entity.User;
import ru.sasha.inventoryvista.mapper.UserMapper;

//@AllArgsConstructor
@Service
public class RegistrationService {

    private final UserDao userDao;
    private final UserMapper userMapper;

    public RegistrationService(UserDao userDao, UserMapper userMapper) {
        this.userDao = userDao;
        this.userMapper = userMapper;
    }


    public void register(UserRegistrationRequestDto user){
        User u = userMapper.toUser(user);
        u.setPassword(encodePassoword(u.getPassword()));
        userDao.save(u);
    }

    private String encodePassoword(String password){
        return password;
    }
}
