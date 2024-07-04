package de.authentication.authenticator;


import java.util.Date;

public class JwtResponseDTO {

    public String accessToken;

    public String gueltig;

    public JwtResponseDTO(String accessToken, String gueltig) {
        this.accessToken = accessToken;
        this.gueltig = gueltig;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getGueltig() {
        return gueltig;
    }

    public void setGueltig(String gueltig) {
        this.gueltig = gueltig;
    }
}
