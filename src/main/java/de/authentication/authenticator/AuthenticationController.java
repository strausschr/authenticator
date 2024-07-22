package de.authentication.authenticator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    public AuthenticationController() {
    }

    @PostMapping("/requestToken")
    public JwtResponseDTO login(@RequestBody AuthRequestDTO authRequestDTO) {
        try {
            UserDetails ud = userDetailsService.loadUserByUsername(authRequestDTO.getUsername());
            String token = jwtService.generateToken(authRequestDTO.getUsername(), authRequestDTO.getPassword(), ud.getAuthorities());
            logger.info("Token: " + token);
            Date gueltig = jwtService.extractExpiration(token);
            logger.info("Gültig bis: " + gueltig);
            return new JwtResponseDTO(token, gueltig.toString(), generateUsername());
        } catch (Exception e) {
            throw new UsernameNotFoundException("invalid user request..!!");
        }
    }

    @GetMapping("/readRequest")
    public String test() {
        try {
            return "Welcome";
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/writeRequest")
    public String getRole() {
        try {
            return "WRITE";
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public String generateUsername() {
        return "Jesus";
    }


}
