package com.bidhan.ors.security;

import com.auth0.jwt.JWT;
import com.bidhan.ors.entity.User;
import com.bidhan.ors.repo.UserRepo;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;





public class JwtAuthorizationFilter  extends BasicAuthenticationFilter {
    private UserRepo userRepository;

    public JwtAuthorizationFilter(AuthenticationManager authenticationManager, UserRepo userRepository) {
        super(authenticationManager);
        this.userRepository = userRepository;

    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        // Read the Authorization header, where the JWT token should be
        String header = request.getHeader(JwtProperties.HEADER_STRING);

        // If header does not contain BEARER
        if (header == null || !header.startsWith(JwtProperties.TOKEN_PREFIX)) {
            chain.doFilter(request, response);
            return;
        }

        // If header is present, try grab user principal from database and perform authorization
        Authentication authentication = getUsernamePasswordAuthentication(request);
        SecurityContextHolder.getContext().setAuthentication(authentication);


        chain.doFilter(request, response);
    }

    private Authentication getUsernamePasswordAuthentication(HttpServletRequest request) {
        // Verify in the DB if we find the user by token subject (username)
        String userName=JwtUtil.verifyUser(request);


            // If yes,  fetch user details and create spring auth token using username, password, authorities/roles
            if (userName != null) {

                User user = userRepository.findByUserId(userName);
                UserPrincipal principal = new UserPrincipal(user);

                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userName, null, principal.getAuthorities());
                return auth;
            }
            return null;

    }



}
