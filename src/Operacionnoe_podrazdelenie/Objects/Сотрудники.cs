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
    /// Сотрудники.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудники CustomAttributes)

    // *** End programmer edit section *** (Сотрудники CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникиE", new string[] {
            "ФИО as \'ФИО\'",
            "IDСотрудн as \'I d сотрудн\'",
            "Должности as \'Должности\'",
            "Должности.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Должности.Наименование"})]
    [MasterViewDefineAttribute("СотрудникиE", "Должности", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("СотрудникиL", new string[] {
            "ФИО as \'ФИО\'",
            "IDСотрудн as \'I d сотрудн\'",
            "Должности.Наименование as \'Наименование\'"})]
    public class Сотрудники : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        private int fIDСотрудн;
        
        private IIS.Operacionnoe_podrazdelenie.Должности fДолжности;
        
        // *** Start programmer edit section *** (Сотрудники CustomMembers)

        // *** End programmer edit section *** (Сотрудники CustomMembers)

        
        /// <summary>
        /// IDСотрудн.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.IDСотрудн CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.IDСотрудн CustomAttributes)
        public virtual int IDСотрудн
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.IDСотрудн Get start)

                // *** End programmer edit section *** (Сотрудники.IDСотрудн Get start)
                int result = this.fIDСотрудн;
                // *** Start programmer edit section *** (Сотрудники.IDСотрудн Get end)

                // *** End programmer edit section *** (Сотрудники.IDСотрудн Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.IDСотрудн Set start)

                // *** End programmer edit section *** (Сотрудники.IDСотрудн Set start)
                this.fIDСотрудн = value;
                // *** Start programmer edit section *** (Сотрудники.IDСотрудн Set end)

                // *** End programmer edit section *** (Сотрудники.IDСотрудн Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.ФИО CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.ФИО Get start)

                // *** End programmer edit section *** (Сотрудники.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Сотрудники.ФИО Get end)

                // *** End programmer edit section *** (Сотрудники.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.ФИО Set start)

                // *** End programmer edit section *** (Сотрудники.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Сотрудники.ФИО Set end)

                // *** End programmer edit section *** (Сотрудники.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Сотрудники.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Должности CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Должности CustomAttributes)
        [PropertyStorage(new string[] {
                "Должности"})]
        [NotNull()]
        public virtual IIS.Operacionnoe_podrazdelenie.Должности Должности
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Должности Get start)

                // *** End programmer edit section *** (Сотрудники.Должности Get start)
                IIS.Operacionnoe_podrazdelenie.Должности result = this.fДолжности;
                // *** Start programmer edit section *** (Сотрудники.Должности Get end)

                // *** End programmer edit section *** (Сотрудники.Должности Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Должности Set start)

                // *** End programmer edit section *** (Сотрудники.Должности Set start)
                this.fДолжности = value;
                // *** Start programmer edit section *** (Сотрудники.Должности Set end)

                // *** End programmer edit section *** (Сотрудники.Должности Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиE", typeof(IIS.Operacionnoe_podrazdelenie.Сотрудники));
                }
            }
            
            /// <summary>
            /// "СотрудникиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиL", typeof(IIS.Operacionnoe_podrazdelenie.Сотрудники));
                }
            }
        }
    }
}
