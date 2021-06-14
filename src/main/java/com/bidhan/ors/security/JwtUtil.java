package com.bidhan.ors.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;


import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

import static com.auth0.jwt.algorithms.Algorithm.HMAC512;

public class JwtUtil {

    public static String createToken(String username, List<String> roleList, int expirationTime, String secretKey){
        return   JWT.create()
                .withSubject(username)
                .withClaim("roles",roleList)
                .withExpiresAt(new Date(System.currentTimeMillis()+expirationTime))
                .sign(Algorithm.HMAC512(secretKey.getBytes()));
    }

    public static String verifyToken(String requestToken,String secretKey){
        return JWT.require(HMAC512(JwtProperties.SECRET.getBytes()))
                .build()
                .verify(requestToken)
                .getSubject();
    }

    public static String verifyUser(HttpServletRequest request){
        //Get Token
        String token = request.getHeader(JwtProperties.HEADER_STRING)
                .replace(JwtProperties.TOKEN_PREFIX,"");
        String userName=null;
        if (token != null) {
            // Validate token
            userName = JwtUtil.verifyToken(token,JwtProperties.SECRET);
        }

        return userName;
    }
}
