package de.authentication.authenticator;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {

    @Autowired
    private JwtService jwtService;

    @Autowired
    UserDetailsServiceImpl userDetailsServiceImpl;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");
        String token = null;
        String username = null;
        String password = null;
        ArrayList roles = null;
        if(authHeader != null && authHeader.startsWith("Bearer ")){
            token = authHeader.substring(7);
            username = jwtService.extractUsernameClaim(token);
            password = jwtService.extractPasswordClaim(token);
            roles = jwtService.extractRolesClaim(token);
        }

        if(username != null && SecurityContextHolder.getContext().getAuthentication() == null){
            UserInfo ui = new UserInfo();
            ui.setUsername(username);
            ui.setPassword(password);
            Set<UserRole> sur = new HashSet<>();
            for (Object s : roles) {
                UserRole tmpRole = new UserRole();
                tmpRole.setName(s.toString());
                sur.add(tmpRole);
            }
            ui.setRoles(sur);
            UserDetails ud = new CustomUserDetails(ui);
            if(jwtService.validateToken(token, ud)){
                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(ud, null, ud.getAuthorities());
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }

        }

        filterChain.doFilter(request, response);
    }
}
