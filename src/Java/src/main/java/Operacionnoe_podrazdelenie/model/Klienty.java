package Operacionnoe_podrazdelenie.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Operacionnoe_podrazdelenie.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Клиенты
 */
@Entity(name = "IISOperacionnoe_podrazdelenieКлиенты")
@Table(schema = "public", name = "Клиенты")
public class Klienty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "ИНН")
    private Integer инн;

    @Column(name = "ПаспортДан")
    private Integer паспортдан;

    @Column(name = "ЮрАдрес")
    private String юрадрес;

    @Column(name = "МестоРаботы")
    private String местоработы;

    @Column(name = "ФактичАдрес")
    private String фактичадрес;

    @Column(name = "КонтактТел")
    private Integer контакттел;

    @Column(name = "IDКлиента")
    private Integer idклиента;

    @Column(name = "НомерСчета")
    private Integer номерсчета;

    @Column(name = "РасчетСчет")
    private Integer расчетсчет;


    public Klienty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Integer getИНН() {
      return инн;
    }

    public void setИНН(Integer инн) {
      this.инн = инн;
    }

    public Integer getПаспортДан() {
      return паспортдан;
    }

    public void setПаспортДан(Integer паспортдан) {
      this.паспортдан = паспортдан;
    }

    public String getЮрАдрес() {
      return юрадрес;
    }

    public void setЮрАдрес(String юрадрес) {
      this.юрадрес = юрадрес;
    }

    public String getМестоРаботы() {
      return местоработы;
    }

    public void setМестоРаботы(String местоработы) {
      this.местоработы = местоработы;
    }

    public String getФактичАдрес() {
      return фактичадрес;
    }

    public void setФактичАдрес(String фактичадрес) {
      this.фактичадрес = фактичадрес;
    }

    public Integer getКонтактТел() {
      return контакттел;
    }

    public void setКонтактТел(Integer контакттел) {
      this.контакттел = контакттел;
    }

    public Integer getIDКлиента() {
      return idклиента;
    }

    public void setIDКлиента(Integer idклиента) {
      this.idклиента = idклиента;
    }

    public Integer getНомерСчета() {
      return номерсчета;
    }

    public void setНомерСчета(Integer номерсчета) {
      this.номерсчета = номерсчета;
    }

    public Integer getРасчетСчет() {
      return расчетсчет;
    }

    public void setРасчетСчет(Integer расчетсчет) {
      this.расчетсчет = расчетсчет;
    }


}