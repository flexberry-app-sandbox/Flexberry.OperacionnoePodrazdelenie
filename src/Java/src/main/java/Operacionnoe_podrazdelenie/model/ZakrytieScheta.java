package Operacionnoe_podrazdelenie.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Operacionnoe_podrazdelenie.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ЗакрытиеСчета
 */
@Entity(name = "IISOperacionnoe_podrazdelenieЗакрытиеСчета")
@Table(schema = "public", name = "ЗакрытиеСчета")
public class ZakrytieScheta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаЗакрСчета")
    private Date датазакрсчета;

    @Column(name = "ТипСчета")
    private String типсчета;

    @Column(name = "Задолжности")
    private Boolean задолжности;

    @Column(name = "ЛицСчета")
    private Integer лицсчета;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "OtkrytieScheta")
    @Convert("OtkrytieScheta")
    @Column(name = "ОткрытиеСчета", length = 16, unique = true, nullable = false)
    private UUID _otkrytieschetaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "OtkrytieScheta", insertable = false, updatable = false)
    private OtkrytieScheta otkrytiescheta;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;


    public ZakrytieScheta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаЗакрСчета() {
      return датазакрсчета;
    }

    public void setДатаЗакрСчета(Date датазакрсчета) {
      this.датазакрсчета = датазакрсчета;
    }

    public String getТипСчета() {
      return типсчета;
    }

    public void setТипСчета(String типсчета) {
      this.типсчета = типсчета;
    }

    public Boolean getЗадолжности() {
      return задолжности;
    }

    public void setЗадолжности(Boolean задолжности) {
      this.задолжности = задолжности;
    }

    public Integer getЛицСчета() {
      return лицсчета;
    }

    public void setЛицСчета(Integer лицсчета) {
      this.лицсчета = лицсчета;
    }


}