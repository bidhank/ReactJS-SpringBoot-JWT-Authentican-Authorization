package com.bidhan.ors.dto;

public class Dto {
    private boolean apiStatus;
    private String apiMsg;

    public Dto(boolean apiStatus, String apiMsg) {
        this.apiStatus = apiStatus;
        this.apiMsg = apiMsg;
    }

    public Dto() {
    }

    public boolean isApiStatus() {
        return apiStatus;
    }

    public void setApiStatus(boolean apiStatus) {
        this.apiStatus = apiStatus;
    }

    public String getApiMsg() {
        return apiMsg;
    }

    public void setApiMsg(String apiMsg) {
        this.apiMsg = apiMsg;
    }
}
