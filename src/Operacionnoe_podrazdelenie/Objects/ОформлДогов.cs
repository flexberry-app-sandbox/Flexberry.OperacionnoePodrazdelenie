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
    /// Оформл догов.
    /// </summary>
    // *** Start programmer edit section *** (ОформлДогов CustomAttributes)

    // *** End programmer edit section *** (ОформлДогов CustomAttributes)
    [AutoAltered()]
    [Caption("Оформл догов")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОформлДоговE", new string[] {
            "ДатаОформл as \'Дата оформл\'",
            "СрокиДогов as \'Сроки догов\'",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.ФИО as \'ФИО\'",
            "Клиенты as \'Клиенты\'",
            "Клиенты.ФИО as \'ФИО\'",
            "Организация as \'Организация\'",
            "Организация.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Сотрудники.ФИО",
            "Клиенты.ФИО",
            "Организация.Наименование"})]
    [MasterViewDefineAttribute("ОформлДоговE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("ОформлДоговE", "Клиенты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("ОформлДоговE", "Организация", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("ОформлДоговL", new string[] {
            "ДатаОформл as \'Дата оформл\'",
            "СрокиДогов as \'Сроки догов\'",
            "Сотрудники.IDСотрудн as \'Сотрудник\'",
            "Организация.Наименование as \'Наименование\'",
            "Клиенты.IDКлиента as \'Клиенты\'",
            "Клиенты.НомерСчета as \'Номер счета\'"})]
    public class ОформлДогов : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатаОформл;
        
        private int fСрокиДогов;
        
        private IIS.Operacionnoe_podrazdelenie.Сотрудники fСотрудники;
        
        private IIS.Operacionnoe_podrazdelenie.Клиенты fКлиенты;
        
        private IIS.Operacionnoe_podrazdelenie.Организация fОрганизация;
        
        // *** Start programmer edit section *** (ОформлДогов CustomMembers)

        // *** End programmer edit section *** (ОформлДогов CustomMembers)

        
        /// <summary>
        /// ДатаОформл.
        /// </summary>
        // *** Start programmer edit section *** (ОформлДогов.ДатаОформл CustomAttributes)

        // *** End programmer edit section *** (ОформлДогов.ДатаОформл CustomAttributes)
        public virtual System.DateTime ДатаОформл
        {
            get
            {
                // *** Start programmer edit section *** (ОформлДогов.ДатаОформл Get start)

                // *** End programmer edit section *** (ОформлДогов.ДатаОформл Get start)
                System.DateTime result = this.fДатаОформл;
                // *** Start programmer edit section *** (ОформлДогов.ДатаОформл Get end)

                // *** End programmer edit section *** (ОформлДогов.ДатаОформл Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОформлДогов.ДатаОформл Set start)

                // *** End programmer edit section *** (ОформлДогов.ДатаОформл Set start)
                this.fДатаОформл = value;
                // *** Start programmer edit section *** (ОформлДогов.ДатаОформл Set end)

                // *** End programmer edit section *** (ОформлДогов.ДатаОформл Set end)
            }
        }
        
        /// <summary>
        /// СрокиДогов.
        /// </summary>
        // *** Start programmer edit section *** (ОформлДогов.СрокиДогов CustomAttributes)

        // *** End programmer edit section *** (ОформлДогов.СрокиДогов CustomAttributes)
        public virtual int СрокиДогов
        {
            get
            {
                // *** Start programmer edit section *** (ОформлДогов.СрокиДогов Get start)

                // *** End programmer edit section *** (ОформлДогов.СрокиДогов Get start)
                int result = this.fСрокиДогов;
                // *** Start programmer edit section *** (ОформлДогов.СрокиДогов Get end)

                // *** End programmer edit section *** (ОформлДогов.СрокиДогов Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОформлДогов.СрокиДогов Set start)

                // *** End programmer edit section *** (ОформлДогов.СрокиДогов Set start)
                this.fСрокиДогов = value;
                // *** Start programmer edit section *** (ОформлДогов.СрокиДогов Set end)

                // *** End programmer edit section *** (ОформлДогов.СрокиДогов Set end)
            }
        }
        
        /// <summary>
        /// Оформл догов.
        /// </summary>
        // *** Start programmer edit section *** (ОформлДогов.Клиенты CustomAttributes)

        // *** End programmer edit section *** (ОформлДогов.Клиенты CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиенты"})]
        [NotNull()]
        public virtual IIS.Operacionnoe_podrazdelenie.Клиенты Клиенты
        {
            get
            {
                // *** Start programmer edit section *** (ОформлДогов.Клиенты Get start)

                // *** End programmer edit section *** (ОформлДогов.Клиенты Get start)
                IIS.Operacionnoe_podrazdelenie.Клиенты result = this.fКлиенты;
                // *** Start programmer edit section *** (ОформлДогов.Клиенты Get end)

                // *** End programmer edit section *** (ОформлДогов.Клиенты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОформлДогов.Клиенты Set start)

                // *** End programmer edit section *** (ОформлДогов.Клиенты Set start)
                this.fКлиенты = value;
                // *** Start programmer edit section *** (ОформлДогов.Клиенты Set end)

                // *** End programmer edit section *** (ОформлДогов.Клиенты Set end)
            }
        }
        
        /// <summary>
        /// Оформл догов.
        /// </summary>
        // *** Start programmer edit section *** (ОформлДогов.Организация CustomAttributes)

        // *** End programmer edit section *** (ОформлДогов.Организация CustomAttributes)
        [PropertyStorage(new string[] {
                "Организация"})]
        [NotNull()]
        public virtual IIS.Operacionnoe_podrazdelenie.Организация Организация
        {
            get
            {
                // *** Start programmer edit section *** (ОформлДогов.Организация Get start)

                // *** End programmer edit section *** (ОформлДогов.Организация Get start)
                IIS.Operacionnoe_podrazdelenie.Организация result = this.fОрганизация;
                // *** Start programmer edit section *** (ОформлДогов.Организация Get end)

                // *** End programmer edit section *** (ОформлДогов.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОформлДогов.Организация Set start)

                // *** End programmer edit section *** (ОформлДогов.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (ОформлДогов.Организация Set end)

                // *** End programmer edit section *** (ОформлДогов.Организация Set end)
            }
        }
        
        /// <summary>
        /// Оформл догов.
        /// </summary>
        // *** Start programmer edit section *** (ОформлДогов.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (ОформлДогов.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.Operacionnoe_podrazdelenie.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (ОформлДогов.Сотрудники Get start)

                // *** End programmer edit section *** (ОформлДогов.Сотрудники Get start)
                IIS.Operacionnoe_podrazdelenie.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (ОформлДогов.Сотрудники Get end)

                // *** End programmer edit section *** (ОформлДогов.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОформлДогов.Сотрудники Set start)

                // *** End programmer edit section *** (ОформлДогов.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (ОформлДогов.Сотрудники Set end)

                // *** End programmer edit section *** (ОформлДогов.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОформлДоговE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОформлДоговE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОформлДоговE", typeof(IIS.Operacionnoe_podrazdelenie.ОформлДогов));
                }
            }
            
            /// <summary>
            /// "ОформлДоговL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОформлДоговL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОформлДоговL", typeof(IIS.Operacionnoe_podrazdelenie.ОформлДогов));
                }
            }
        }
    }
}
