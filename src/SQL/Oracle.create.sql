



CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"IDСотрудн" NUMBER(10) NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Организация"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клиенты"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"ИНН" NUMBER(10) NULL,

	"ПаспортДан" NUMBER(10) NULL,

	"ЮрАдрес" NVARCHAR2(255) NULL,

	"МестоРаботы" NVARCHAR2(255) NULL,

	"ФактичАдрес" NVARCHAR2(255) NULL,

	"КонтактТел" NUMBER(10) NULL,

	"IDКлиента" NUMBER(10) NULL,

	"НомерСчета" NUMBER(10) NULL,

	"РасчетСчет" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОтделОперПодр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОформлДогов"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаОформл" DATE NULL,

	"СрокиДогов" NUMBER(10) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	"Клиенты" RAW(16) NOT NULL,

	"Организация" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЗакрытиеСчета"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаЗакрСчета" DATE NULL,

	"ТипСчета" NVARCHAR2(13) NULL,

	"Задолжности" NUMBER(1) NULL,

	"ЛицСчета" NUMBER(10) NULL,

	"Организация" RAW(16) NOT NULL,

	"ОткрытиеСчета" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОткрытиеСчета"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаОткрСчета" DATE NULL,

	"ТипСчета" NVARCHAR2(13) NULL,

	"ВидВалюты" NVARCHAR2(255) NULL,

	"ДокНаОткрСчета" NUMBER(1) NULL,

	"ЛицСчета" NUMBER(10) NULL,

	"Организация" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПриемИОбрПоруч"
(

	"primaryKey" RAW(16) NOT NULL,

	"ВидОперац" NVARCHAR2(255) NULL,

	"СчетПолуч" NVARCHAR2(255) NULL,

	"ДатаДоговора" DATE NULL,

	"ВидПлатежа" NVARCHAR2(255) NULL,

	"СуммаПлатеж" NUMBER(10) NULL,

	"СуммаСНДС" NUMBER(10) NULL,

	"НазначПлатеж" NVARCHAR2(255) NULL,

	"Оплачено" NUMBER(1) NULL,

	"ПодтвВыпБанка" NUMBER(1) NULL,

	"Организация" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"IDДолжности" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ФормирДосье"
(

	"primaryKey" RAW(16) NOT NULL,

	"НаименДосье" NVARCHAR2(255) NULL,

	"ДатаОформл" DATE NULL,

	"Договора" NUMBER(10) NULL,

	"Организация" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	"Клиенты" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Сотрудники"
	ADD CONSTRAINT "Сотрудники_FД_4635" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Сотрудники_IД_6967" on "Сотрудники" ("Должности");

ALTER TABLE "ОтделОперПодр"
	ADD CONSTRAINT "ОтделОперПод_3276" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ОтделОперПод_5065" on "ОтделОперПодр" ("Сотрудники");

ALTER TABLE "ОформлДогов"
	ADD CONSTRAINT "ОформлДогов_F_5402" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ОформлДогов_I_7602" on "ОформлДогов" ("Сотрудники");

ALTER TABLE "ОформлДогов"
	ADD CONSTRAINT "ОформлДогов_F_2128" FOREIGN KEY ("Клиенты") REFERENCES "Клиенты" ("primaryKey");

CREATE INDEX "ОформлДогов_IК_608" on "ОформлДогов" ("Клиенты");

ALTER TABLE "ОформлДогов"
	ADD CONSTRAINT "ОформлДогов_FО_935" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "ОформлДогов_I_7530" on "ОформлДогов" ("Организация");

ALTER TABLE "ЗакрытиеСчета"
	ADD CONSTRAINT "ЗакрытиеСчет_3499" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "ЗакрытиеСчет_9187" on "ЗакрытиеСчета" ("Организация");

ALTER TABLE "ЗакрытиеСчета"
	ADD CONSTRAINT "ЗакрытиеСчет_3598" FOREIGN KEY ("ОткрытиеСчета") REFERENCES "ОткрытиеСчета" ("primaryKey");

CREATE INDEX "ЗакрытиеСчет_7343" on "ЗакрытиеСчета" ("ОткрытиеСчета");

ALTER TABLE "ЗакрытиеСчета"
	ADD CONSTRAINT "ЗакрытиеСчет_3420" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ЗакрытиеСчет_6969" on "ЗакрытиеСчета" ("Сотрудники");

ALTER TABLE "ОткрытиеСчета"
	ADD CONSTRAINT "ОткрытиеСчет_6741" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "ОткрытиеСчет_6466" on "ОткрытиеСчета" ("Организация");

ALTER TABLE "ОткрытиеСчета"
	ADD CONSTRAINT "ОткрытиеСчет_4567" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ОткрытиеСчет_1009" on "ОткрытиеСчета" ("Сотрудники");

ALTER TABLE "ПриемИОбрПоруч"
	ADD CONSTRAINT "ПриемИОбрПор_6899" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "ПриемИОбрПор_9667" on "ПриемИОбрПоруч" ("Организация");

ALTER TABLE "ФормирДосье"
	ADD CONSTRAINT "ФормирДосье_F_9950" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "ФормирДосье_I_9980" on "ФормирДосье" ("Организация");

ALTER TABLE "ФормирДосье"
	ADD CONSTRAINT "ФормирДосье_F_6403" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ФормирДосье_I_5271" on "ФормирДосье" ("Сотрудники");

ALTER TABLE "ФормирДосье"
	ADD CONSTRAINT "ФормирДосье_F_8949" FOREIGN KEY ("Клиенты") REFERENCES "Клиенты" ("primaryKey");

CREATE INDEX "ФормирДосье_I_8517" on "ФормирДосье" ("Клиенты");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


