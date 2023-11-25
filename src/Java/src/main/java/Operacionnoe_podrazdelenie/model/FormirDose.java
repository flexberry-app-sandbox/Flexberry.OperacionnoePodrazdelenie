package Operacionnoe_podrazdelenie.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Operacionnoe_podrazdelenie.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ФормирДосье
 */
@Entity(name = "IISOperacionnoe_podrazdelenieФормирДосье")
@Table(schema = "public", name = "ФормирДосье")
public class FormirDose {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НаименДосье")
    private String наимендосье;

    @Column(name = "ДатаОформл")
    private Date датаоформл;

    @Column(name = "Договора")
    private Integer договора;

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

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klienty")
    @Convert("Klienty")
    @Column(name = "Клиенты", length = 16, unique = true, nullable = false)
    private UUID _klientyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klienty", insertable = false, updatable = false)
    private Klienty klienty;


    public FormirDose() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименДосье() {
      return наимендосье;
    }

    public void setНаименДосье(String наимендосье) {
      this.наимендосье = наимендосье;
    }

    public Date getДатаОформл() {
      return датаоформл;
    }

    public void setДатаОформл(Date датаоформл) {
      this.датаоформл = датаоформл;
    }

    public Integer getДоговора() {
      return договора;
    }

    public void setДоговора(Integer договора) {
      this.договора = договора;
    }


}