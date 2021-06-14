package com.bidhan.ors.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Unit {
    @Id
    private int id;

    private String unitName;

    private String unitIncharge;

    private String unitType;

    public Unit(int id,String unitName, String unitIncharge, String unitType) {
        this.id=id;
        this.unitName = unitName;
        this.unitIncharge = unitIncharge;
        this.unitType = unitType;
    }

    public Unit() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUnitName() {
        return unitName;
    }

    public void setUnitName(String unitName) {
        this.unitName = unitName;
    }

    public String getUnitType() {
        return unitType;
    }

    public void setUnitType(String unitType) {
        this.unitType = unitType;
    }

    public String getUnitIncharge() {
        return unitIncharge;
    }

    public void setUnitIncharge(String unitIncharge) {
        this.unitIncharge = unitIncharge;
    }
}
