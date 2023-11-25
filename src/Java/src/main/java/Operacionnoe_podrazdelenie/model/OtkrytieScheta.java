package Operacionnoe_podrazdelenie.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Operacionnoe_podrazdelenie.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ОткрытиеСчета
 */
@Entity(name = "IISOperacionnoe_podrazdelenieОткрытиеСчета")
@Table(schema = "public", name = "ОткрытиеСчета")
public class OtkrytieScheta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаОткрСчета")
    private Date датаоткрсчета;

    @Column(name = "ТипСчета")
    private String типсчета;

    @Column(name = "ВидВалюты")
    private String видвалюты;

    @Column(name = "ДокНаОткрСчета")
    private Boolean докнаоткрсчета;

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
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;


    public OtkrytieScheta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаОткрСчета() {
      return датаоткрсчета;
    }

    public void setДатаОткрСчета(Date датаоткрсчета) {
      this.датаоткрсчета = датаоткрсчета;
    }

    public String getТипСчета() {
      return типсчета;
    }

    public void setТипСчета(String типсчета) {
      this.типсчета = типсчета;
    }

    public String getВидВалюты() {
      return видвалюты;
    }

    public void setВидВалюты(String видвалюты) {
      this.видвалюты = видвалюты;
    }

    public Boolean getДокНаОткрСчета() {
      return докнаоткрсчета;
    }

    public void setДокНаОткрСчета(Boolean докнаоткрсчета) {
      this.докнаоткрсчета = докнаоткрсчета;
    }

    public Integer getЛицСчета() {
      return лицсчета;
    }

    public void setЛицСчета(Integer лицсчета) {
      this.лицсчета = лицсчета;
    }


}