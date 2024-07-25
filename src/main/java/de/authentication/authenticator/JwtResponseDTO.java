package de.authentication.authenticator;


import java.util.ArrayList;
import java.util.Date;

public class JwtResponseDTO {

    public String accessToken;

    public String gueltig;

    public String username;

    public ArrayList roles;

    public JwtResponseDTO(String accessToken, String gueltig, String username, ArrayList roles) {
        this.accessToken = accessToken;
        this.gueltig = gueltig;
        this.username = username;
        this.roles = roles;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public ArrayList getRoles() {
        return roles;
    }

    public void setRoles(ArrayList roles) {
        this.roles = roles;
    }
}
