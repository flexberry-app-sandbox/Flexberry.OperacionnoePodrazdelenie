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
    /// Клиенты.
    /// </summary>
    // *** Start programmer edit section *** (Клиенты CustomAttributes)

    // *** End programmer edit section *** (Клиенты CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КлиентыE", new string[] {
            "ФИО as \'ФИО\'",
            "ИНН as \'ИНН\'",
            "ПаспортДан as \'Паспорт дан\'",
            "ЮрАдрес as \'Юр адрес\'",
            "МестоРаботы as \'Место работы\'",
            "ФактичАдрес as \'Фактич адрес\'",
            "КонтактТел as \'Контакт тел\'",
            "IDКлиента as \'I d клиента\'",
            "НомерСчета as \'Номер счета\'",
            "РасчетСчет as \'Расчет счет\'"})]
    [View("КлиентыL", new string[] {
            "ФИО as \'ФИО\'",
            "ИНН as \'ИНН\'",
            "ПаспортДан as \'Паспорт дан\'",
            "ЮрАдрес as \'Юр адрес\'",
            "МестоРаботы as \'Место работы\'",
            "ФактичАдрес as \'Фактич адрес\'",
            "КонтактТел as \'Контакт тел\'",
            "IDКлиента as \'I d клиента\'",
            "НомерСчета as \'Номер счета\'",
            "РасчетСчет as \'Расчет счет\'"})]
    public class Клиенты : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        private int fИНН;
        
        private int fПаспортДан;
        
        private string fЮрАдрес;
        
        private string fМестоРаботы;
        
        private string fФактичАдрес;
        
        private int fКонтактТел;
        
        private int fIDКлиента;
        
        private int fНомерСчета;
        
        private int fРасчетСчет;
        
        // *** Start programmer edit section *** (Клиенты CustomMembers)

        // *** End programmer edit section *** (Клиенты CustomMembers)

        
        /// <summary>
        /// IDКлиента.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.IDКлиента CustomAttributes)

        // *** End programmer edit section *** (Клиенты.IDКлиента CustomAttributes)
        public virtual int IDКлиента
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.IDКлиента Get start)

                // *** End programmer edit section *** (Клиенты.IDКлиента Get start)
                int result = this.fIDКлиента;
                // *** Start programmer edit section *** (Клиенты.IDКлиента Get end)

                // *** End programmer edit section *** (Клиенты.IDКлиента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.IDКлиента Set start)

                // *** End programmer edit section *** (Клиенты.IDКлиента Set start)
                this.fIDКлиента = value;
                // *** Start programmer edit section *** (Клиенты.IDКлиента Set end)

                // *** End programmer edit section *** (Клиенты.IDКлиента Set end)
            }
        }
        
        /// <summary>
        /// ИНН.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.ИНН CustomAttributes)

        // *** End programmer edit section *** (Клиенты.ИНН CustomAttributes)
        public virtual int ИНН
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.ИНН Get start)

                // *** End programmer edit section *** (Клиенты.ИНН Get start)
                int result = this.fИНН;
                // *** Start programmer edit section *** (Клиенты.ИНН Get end)

                // *** End programmer edit section *** (Клиенты.ИНН Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.ИНН Set start)

                // *** End programmer edit section *** (Клиенты.ИНН Set start)
                this.fИНН = value;
                // *** Start programmer edit section *** (Клиенты.ИНН Set end)

                // *** End programmer edit section *** (Клиенты.ИНН Set end)
            }
        }
        
        /// <summary>
        /// КонтактТел.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.КонтактТел CustomAttributes)

        // *** End programmer edit section *** (Клиенты.КонтактТел CustomAttributes)
        public virtual int КонтактТел
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.КонтактТел Get start)

                // *** End programmer edit section *** (Клиенты.КонтактТел Get start)
                int result = this.fКонтактТел;
                // *** Start programmer edit section *** (Клиенты.КонтактТел Get end)

                // *** End programmer edit section *** (Клиенты.КонтактТел Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.КонтактТел Set start)

                // *** End programmer edit section *** (Клиенты.КонтактТел Set start)
                this.fКонтактТел = value;
                // *** Start programmer edit section *** (Клиенты.КонтактТел Set end)

                // *** End programmer edit section *** (Клиенты.КонтактТел Set end)
            }
        }
        
        /// <summary>
        /// МестоРаботы.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.МестоРаботы CustomAttributes)

        // *** End programmer edit section *** (Клиенты.МестоРаботы CustomAttributes)
        [StrLen(255)]
        public virtual string МестоРаботы
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.МестоРаботы Get start)

                // *** End programmer edit section *** (Клиенты.МестоРаботы Get start)
                string result = this.fМестоРаботы;
                // *** Start programmer edit section *** (Клиенты.МестоРаботы Get end)

                // *** End programmer edit section *** (Клиенты.МестоРаботы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.МестоРаботы Set start)

                // *** End programmer edit section *** (Клиенты.МестоРаботы Set start)
                this.fМестоРаботы = value;
                // *** Start programmer edit section *** (Клиенты.МестоРаботы Set end)

                // *** End programmer edit section *** (Клиенты.МестоРаботы Set end)
            }
        }
        
        /// <summary>
        /// НомерСчета.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.НомерСчета CustomAttributes)

        // *** End programmer edit section *** (Клиенты.НомерСчета CustomAttributes)
        public virtual int НомерСчета
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.НомерСчета Get start)

                // *** End programmer edit section *** (Клиенты.НомерСчета Get start)
                int result = this.fНомерСчета;
                // *** Start programmer edit section *** (Клиенты.НомерСчета Get end)

                // *** End programmer edit section *** (Клиенты.НомерСчета Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.НомерСчета Set start)

                // *** End programmer edit section *** (Клиенты.НомерСчета Set start)
                this.fНомерСчета = value;
                // *** Start programmer edit section *** (Клиенты.НомерСчета Set end)

                // *** End programmer edit section *** (Клиенты.НомерСчета Set end)
            }
        }
        
        /// <summary>
        /// ПаспортДан.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.ПаспортДан CustomAttributes)

        // *** End programmer edit section *** (Клиенты.ПаспортДан CustomAttributes)
        public virtual int ПаспортДан
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.ПаспортДан Get start)

                // *** End programmer edit section *** (Клиенты.ПаспортДан Get start)
                int result = this.fПаспортДан;
                // *** Start programmer edit section *** (Клиенты.ПаспортДан Get end)

                // *** End programmer edit section *** (Клиенты.ПаспортДан Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.ПаспортДан Set start)

                // *** End programmer edit section *** (Клиенты.ПаспортДан Set start)
                this.fПаспортДан = value;
                // *** Start programmer edit section *** (Клиенты.ПаспортДан Set end)

                // *** End programmer edit section *** (Клиенты.ПаспортДан Set end)
            }
        }
        
        /// <summary>
        /// РасчетСчет.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.РасчетСчет CustomAttributes)

        // *** End programmer edit section *** (Клиенты.РасчетСчет CustomAttributes)
        public virtual int РасчетСчет
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.РасчетСчет Get start)

                // *** End programmer edit section *** (Клиенты.РасчетСчет Get start)
                int result = this.fРасчетСчет;
                // *** Start programmer edit section *** (Клиенты.РасчетСчет Get end)

                // *** End programmer edit section *** (Клиенты.РасчетСчет Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.РасчетСчет Set start)

                // *** End programmer edit section *** (Клиенты.РасчетСчет Set start)
                this.fРасчетСчет = value;
                // *** Start programmer edit section *** (Клиенты.РасчетСчет Set end)

                // *** End programmer edit section *** (Клиенты.РасчетСчет Set end)
            }
        }
        
        /// <summary>
        /// ФактичАдрес.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.ФактичАдрес CustomAttributes)

        // *** End programmer edit section *** (Клиенты.ФактичАдрес CustomAttributes)
        [StrLen(255)]
        public virtual string ФактичАдрес
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.ФактичАдрес Get start)

                // *** End programmer edit section *** (Клиенты.ФактичАдрес Get start)
                string result = this.fФактичАдрес;
                // *** Start programmer edit section *** (Клиенты.ФактичАдрес Get end)

                // *** End programmer edit section *** (Клиенты.ФактичАдрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.ФактичАдрес Set start)

                // *** End programmer edit section *** (Клиенты.ФактичАдрес Set start)
                this.fФактичАдрес = value;
                // *** Start programmer edit section *** (Клиенты.ФактичАдрес Set end)

                // *** End programmer edit section *** (Клиенты.ФактичАдрес Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.ФИО CustomAttributes)

        // *** End programmer edit section *** (Клиенты.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.ФИО Get start)

                // *** End programmer edit section *** (Клиенты.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Клиенты.ФИО Get end)

                // *** End programmer edit section *** (Клиенты.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.ФИО Set start)

                // *** End programmer edit section *** (Клиенты.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Клиенты.ФИО Set end)

                // *** End programmer edit section *** (Клиенты.ФИО Set end)
            }
        }
        
        /// <summary>
        /// ЮрАдрес.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.ЮрАдрес CustomAttributes)

        // *** End programmer edit section *** (Клиенты.ЮрАдрес CustomAttributes)
        [StrLen(255)]
        public virtual string ЮрАдрес
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.ЮрАдрес Get start)

                // *** End programmer edit section *** (Клиенты.ЮрАдрес Get start)
                string result = this.fЮрАдрес;
                // *** Start programmer edit section *** (Клиенты.ЮрАдрес Get end)

                // *** End programmer edit section *** (Клиенты.ЮрАдрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.ЮрАдрес Set start)

                // *** End programmer edit section *** (Клиенты.ЮрАдрес Set start)
                this.fЮрАдрес = value;
                // *** Start programmer edit section *** (Клиенты.ЮрАдрес Set end)

                // *** End programmer edit section *** (Клиенты.ЮрАдрес Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КлиентыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентыE", typeof(IIS.Operacionnoe_podrazdelenie.Клиенты));
                }
            }
            
            /// <summary>
            /// "КлиентыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентыL", typeof(IIS.Operacionnoe_podrazdelenie.Клиенты));
                }
            }
        }
    }
}
