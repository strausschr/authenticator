package de.authentication.authenticator;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Collections;

@Component
public class TokenService {

    private final AuthenticationManager authenticationManager;

    private final UserDetailsServiceImpl userDetailsServiceImpl;

    private final JwtService jwtService;

    public TokenService(AuthenticationManager authenticationManager,
                        UserDetailsServiceImpl userDetailsServiceImpl,
                        JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.userDetailsServiceImpl = userDetailsServiceImpl;
        this.jwtService = jwtService;
    }

    public JwtResponseDTO generateToken(AuthRequestDTO tokenRequest) {
        this.authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        tokenRequest.getUsername(), tokenRequest.getPassword()));
        final UserDetails userDetails =
                userDetailsServiceImpl.loadUserByUsername(tokenRequest.getUsername());
        String token = jwtService.generateToken(userDetails.getUsername());
        return new JwtResponseDTO(token);
    }

}
