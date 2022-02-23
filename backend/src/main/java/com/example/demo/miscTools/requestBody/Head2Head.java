package com.example.demo.miscTools.requestBody;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

/*@Component
@RequestScope
@Lazy*/
public class Head2Head {
    private String p1;
    private String p2;

    public void setP1(String p1) {
        this.p1 = p1;
    }

    public String getP1() {
        return p1;
    }

    public void setP2(String p2) {
        this.p2 = p2;
    }

    public String getP2() {
        return p2;
    }
}
