package Operacionnoe_podrazdelenie.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Operacionnoe_podrazdelenie.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ПриемИОбрПоруч
 */
@Entity(name = "IISOperacionnoe_podrazdelenieПриемИОбрПоруч")
@Table(schema = "public", name = "ПриемИОбрПоруч")
public class PriemIObrPoruch {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ВидОперац")
    private String видоперац;

    @Column(name = "СчетПолуч")
    private String счетполуч;

    @Column(name = "ДатаДоговора")
    private Date датадоговора;

    @Column(name = "ВидПлатежа")
    private String видплатежа;

    @Column(name = "СуммаПлатеж")
    private Integer суммаплатеж;

    @Column(name = "СуммаСНДС")
    private Integer суммасндс;

    @Column(name = "НазначПлатеж")
    private String назначплатеж;

    @Column(name = "Оплачено")
    private Boolean оплачено;

    @Column(name = "ПодтвВыпБанка")
    private Boolean подтввыпбанка;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;


    public PriemIObrPoruch() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getВидОперац() {
      return видоперац;
    }

    public void setВидОперац(String видоперац) {
      this.видоперац = видоперац;
    }

    public String getСчетПолуч() {
      return счетполуч;
    }

    public void setСчетПолуч(String счетполуч) {
      this.счетполуч = счетполуч;
    }

    public Date getДатаДоговора() {
      return датадоговора;
    }

    public void setДатаДоговора(Date датадоговора) {
      this.датадоговора = датадоговора;
    }

    public String getВидПлатежа() {
      return видплатежа;
    }

    public void setВидПлатежа(String видплатежа) {
      this.видплатежа = видплатежа;
    }

    public Integer getСуммаПлатеж() {
      return суммаплатеж;
    }

    public void setСуммаПлатеж(Integer суммаплатеж) {
      this.суммаплатеж = суммаплатеж;
    }

    public Integer getСуммаСНДС() {
      return суммасндс;
    }

    public void setСуммаСНДС(Integer суммасндс) {
      this.суммасндс = суммасндс;
    }

    public String getНазначПлатеж() {
      return назначплатеж;
    }

    public void setНазначПлатеж(String назначплатеж) {
      this.назначплатеж = назначплатеж;
    }

    public Boolean getОплачено() {
      return оплачено;
    }

    public void setОплачено(Boolean оплачено) {
      this.оплачено = оплачено;
    }

    public Boolean getПодтвВыпБанка() {
      return подтввыпбанка;
    }

    public void setПодтвВыпБанка(Boolean подтввыпбанка) {
      this.подтввыпбанка = подтввыпбанка;
    }


}