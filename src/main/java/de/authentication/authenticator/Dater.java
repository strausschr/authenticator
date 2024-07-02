package de.authentication.authenticator;

import com.nimbusds.jwt.util.DateUtils;
import org.hibernate.type.descriptor.DateTimeUtils;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

public class Dater {

    public static void main(String[] args) {
        LocalDateTime d1 = LocalDateTime.now().plusHours(1);
        Date d = Date.from(Instant.ofEpochMilli(System.currentTimeMillis() + (60000 * 60)));
        System.out.println(d);
        System.out.println(d1);
    }

}
