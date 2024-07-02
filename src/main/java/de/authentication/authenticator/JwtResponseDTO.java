package de.authentication.authenticator;


public class JwtResponseDTO {

    public String accessToken;

    public JwtResponseDTO(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
