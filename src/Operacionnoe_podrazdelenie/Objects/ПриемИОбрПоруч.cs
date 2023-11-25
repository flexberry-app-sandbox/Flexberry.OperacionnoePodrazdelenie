﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Operacionnoe_podrazdelenie
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Прием и обр поруч.
    /// </summary>
    // *** Start programmer edit section *** (ПриемИОбрПоруч CustomAttributes)

    // *** End programmer edit section *** (ПриемИОбрПоруч CustomAttributes)
    [AutoAltered()]
    [Caption("Прием и обр поруч")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПриемИОбрПоручE", new string[] {
            "ВидОперац as \'Вид операц\'",
            "СчетПолуч as \'Счет получ\'",
            "ДатаДоговора as \'Дата договора\'",
            "ВидПлатежа as \'Вид платежа\'",
            "СуммаПлатеж as \'Сумма платеж\'",
            "СуммаСНДС as \'Сумма СНДС\'",
            "НазначПлатеж as \'Назнач платеж\'",
            "Оплачено as \'Оплачено\'",
            "ПодтвВыпБанка as \'Подтв вып банка\'",
            "Организация as \'Организация\'",
            "Организация.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Организация.Наименование"})]
    [MasterViewDefineAttribute("ПриемИОбрПоручE", "Организация", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("ПриемИОбрПоручL", new string[] {
            "ВидОперац as \'Вид операц\'",
            "СчетПолуч as \'Счет получ\'",
            "ДатаДоговора as \'Дата договора\'",
            "ВидПлатежа as \'Вид платежа\'",
            "СуммаПлатеж as \'Сумма платеж\'",
            "СуммаСНДС as \'Сумма СНДС\'",
            "НазначПлатеж as \'Назнач платеж\'",
            "Оплачено as \'Оплачено\'",
            "ПодтвВыпБанка as \'Подтв вып банка\'",
            "Организация.Наименование as \'Организация\'"})]
    public class ПриемИОбрПоруч : ICSSoft.STORMNET.DataObject
    {
        
        private string fВидОперац;
        
        private string fСчетПолуч;
        
        private System.DateTime fДатаДоговора;
        
        private string fВидПлатежа;
        
        private int fСуммаПлатеж;
        
        private int fСуммаСНДС;
        
        private string fНазначПлатеж;
        
        private bool fОплачено;
        
        private bool fПодтвВыпБанка;
        
        private IIS.Operacionnoe_podrazdelenie.Организация fОрганизация;
        
        // *** Start programmer edit section *** (ПриемИОбрПоруч CustomMembers)

        // *** End programmer edit section *** (ПриемИОбрПоруч CustomMembers)

        
        /// <summary>
        /// ВидОперац.
        /// </summary>
        // *** Start programmer edit section *** (ПриемИОбрПоруч.ВидОперац CustomAttributes)

        // *** End programmer edit section *** (ПриемИОбрПоруч.ВидОперац CustomAttributes)
        [StrLen(255)]
        public virtual string ВидОперац
        {
            get
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.ВидОперац Get start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.ВидОперац Get start)
                string result = this.fВидОперац;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.ВидОперац Get end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.ВидОперац Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.ВидОперац Set start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.ВидОперац Set start)
                this.fВидОперац = value;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.ВидОперац Set end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.ВидОперац Set end)
            }
        }
        
        /// <summary>
        /// ВидПлатежа.
        /// </summary>
        // *** Start programmer edit section *** (ПриемИОбрПоруч.ВидПлатежа CustomAttributes)

        // *** End programmer edit section *** (ПриемИОбрПоруч.ВидПлатежа CustomAttributes)
        [StrLen(255)]
        public virtual string ВидПлатежа
        {
            get
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.ВидПлатежа Get start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.ВидПлатежа Get start)
                string result = this.fВидПлатежа;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.ВидПлатежа Get end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.ВидПлатежа Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.ВидПлатежа Set start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.ВидПлатежа Set start)
                this.fВидПлатежа = value;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.ВидПлатежа Set end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.ВидПлатежа Set end)
            }
        }
        
        /// <summary>
        /// ДатаДоговора.
        /// </summary>
        // *** Start programmer edit section *** (ПриемИОбрПоруч.ДатаДоговора CustomAttributes)

        // *** End programmer edit section *** (ПриемИОбрПоруч.ДатаДоговора CustomAttributes)
        public virtual System.DateTime ДатаДоговора
        {
            get
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.ДатаДоговора Get start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.ДатаДоговора Get start)
                System.DateTime result = this.fДатаДоговора;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.ДатаДоговора Get end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.ДатаДоговора Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.ДатаДоговора Set start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.ДатаДоговора Set start)
                this.fДатаДоговора = value;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.ДатаДоговора Set end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.ДатаДоговора Set end)
            }
        }
        
        /// <summary>
        /// НазначПлатеж.
        /// </summary>
        // *** Start programmer edit section *** (ПриемИОбрПоруч.НазначПлатеж CustomAttributes)

        // *** End programmer edit section *** (ПриемИОбрПоруч.НазначПлатеж CustomAttributes)
        [StrLen(255)]
        public virtual string НазначПлатеж
        {
            get
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.НазначПлатеж Get start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.НазначПлатеж Get start)
                string result = this.fНазначПлатеж;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.НазначПлатеж Get end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.НазначПлатеж Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.НазначПлатеж Set start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.НазначПлатеж Set start)
                this.fНазначПлатеж = value;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.НазначПлатеж Set end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.НазначПлатеж Set end)
            }
        }
        
        /// <summary>
        /// Оплачено.
        /// </summary>
        // *** Start programmer edit section *** (ПриемИОбрПоруч.Оплачено CustomAttributes)

        // *** End programmer edit section *** (ПриемИОбрПоруч.Оплачено CustomAttributes)
        public virtual bool Оплачено
        {
            get
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.Оплачено Get start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.Оплачено Get start)
                bool result = this.fОплачено;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.Оплачено Get end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.Оплачено Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.Оплачено Set start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.Оплачено Set start)
                this.fОплачено = value;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.Оплачено Set end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.Оплачено Set end)
            }
        }
        
        /// <summary>
        /// ПодтвВыпБанка.
        /// </summary>
        // *** Start programmer edit section *** (ПриемИОбрПоруч.ПодтвВыпБанка CustomAttributes)

        // *** End programmer edit section *** (ПриемИОбрПоруч.ПодтвВыпБанка CustomAttributes)
        public virtual bool ПодтвВыпБанка
        {
            get
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.ПодтвВыпБанка Get start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.ПодтвВыпБанка Get start)
                bool result = this.fПодтвВыпБанка;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.ПодтвВыпБанка Get end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.ПодтвВыпБанка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.ПодтвВыпБанка Set start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.ПодтвВыпБанка Set start)
                this.fПодтвВыпБанка = value;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.ПодтвВыпБанка Set end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.ПодтвВыпБанка Set end)
            }
        }
        
        /// <summary>
        /// СуммаПлатеж.
        /// </summary>
        // *** Start programmer edit section *** (ПриемИОбрПоруч.СуммаПлатеж CustomAttributes)

        // *** End programmer edit section *** (ПриемИОбрПоруч.СуммаПлатеж CustomAttributes)
        public virtual int СуммаПлатеж
        {
            get
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.СуммаПлатеж Get start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.СуммаПлатеж Get start)
                int result = this.fСуммаПлатеж;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.СуммаПлатеж Get end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.СуммаПлатеж Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.СуммаПлатеж Set start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.СуммаПлатеж Set start)
                this.fСуммаПлатеж = value;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.СуммаПлатеж Set end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.СуммаПлатеж Set end)
            }
        }
        
        /// <summary>
        /// СуммаСНДС.
        /// </summary>
        // *** Start programmer edit section *** (ПриемИОбрПоруч.СуммаСНДС CustomAttributes)

        // *** End programmer edit section *** (ПриемИОбрПоруч.СуммаСНДС CustomAttributes)
        public virtual int СуммаСНДС
        {
            get
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.СуммаСНДС Get start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.СуммаСНДС Get start)
                int result = this.fСуммаСНДС;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.СуммаСНДС Get end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.СуммаСНДС Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.СуммаСНДС Set start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.СуммаСНДС Set start)
                this.fСуммаСНДС = value;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.СуммаСНДС Set end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.СуммаСНДС Set end)
            }
        }
        
        /// <summary>
        /// СчетПолуч.
        /// </summary>
        // *** Start programmer edit section *** (ПриемИОбрПоруч.СчетПолуч CustomAttributes)

        // *** End programmer edit section *** (ПриемИОбрПоруч.СчетПолуч CustomAttributes)
        [StrLen(255)]
        public virtual string СчетПолуч
        {
            get
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.СчетПолуч Get start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.СчетПолуч Get start)
                string result = this.fСчетПолуч;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.СчетПолуч Get end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.СчетПолуч Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.СчетПолуч Set start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.СчетПолуч Set start)
                this.fСчетПолуч = value;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.СчетПолуч Set end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.СчетПолуч Set end)
            }
        }
        
        /// <summary>
        /// Прием и обр поруч.
        /// </summary>
        // *** Start programmer edit section *** (ПриемИОбрПоруч.Организация CustomAttributes)

        // *** End programmer edit section *** (ПриемИОбрПоруч.Организация CustomAttributes)
        [PropertyStorage(new string[] {
                "Организация"})]
        [NotNull()]
        public virtual IIS.Operacionnoe_podrazdelenie.Организация Организация
        {
            get
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.Организация Get start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.Организация Get start)
                IIS.Operacionnoe_podrazdelenie.Организация result = this.fОрганизация;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.Организация Get end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриемИОбрПоруч.Организация Set start)

                // *** End programmer edit section *** (ПриемИОбрПоруч.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (ПриемИОбрПоруч.Организация Set end)

                // *** End programmer edit section *** (ПриемИОбрПоруч.Организация Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПриемИОбрПоручE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПриемИОбрПоручE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПриемИОбрПоручE", typeof(IIS.Operacionnoe_podrazdelenie.ПриемИОбрПоруч));
                }
            }
            
            /// <summary>
            /// "ПриемИОбрПоручL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПриемИОбрПоручL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПриемИОбрПоручL", typeof(IIS.Operacionnoe_podrazdelenie.ПриемИОбрПоруч));
                }
            }
        }
    }
}
