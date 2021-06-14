package com.bidhan.ors.security;

public class JwtProperties {
    public static final String SECRET="ors123";
    public static final int EXPIRATION_TIME=86400000;//1 day
    public static final String TOKEN_PREFIX="Bearer ";
    public static final String HEADER_STRING="Authorization";
}
