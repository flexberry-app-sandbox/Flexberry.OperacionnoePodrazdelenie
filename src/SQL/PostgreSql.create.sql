




CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 IDСотрудн INT NULL,
 ФИО VARCHAR(255) NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Организация (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Клиенты (
 primaryKey UUID NOT NULL,
 IDКлиента INT NULL,
 ИНН INT NULL,
 КонтактТел INT NULL,
 МестоРаботы VARCHAR(255) NULL,
 НомерСчета INT NULL,
 ПаспортДан INT NULL,
 РасчетСчет INT NULL,
 ФактичАдрес VARCHAR(255) NULL,
 ФИО VARCHAR(255) NULL,
 ЮрАдрес VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОтделОперПодр (
 primaryKey UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОформлДогов (
 primaryKey UUID NOT NULL,
 ДатаОформл TIMESTAMP(3) NULL,
 СрокиДогов INT NULL,
 Клиенты UUID NOT NULL,
 Организация UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗакрытиеСчета (
 primaryKey UUID NOT NULL,
 ДатаЗакрСчета TIMESTAMP(3) NULL,
 Задолжности BOOLEAN NULL,
 ЛицСчета INT NULL,
 ТипСчета VARCHAR(15) NULL,
 Организация UUID NOT NULL,
 ОткрытиеСчета UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОткрытиеСчета (
 primaryKey UUID NOT NULL,
 ВидВалюты VARCHAR(255) NULL,
 ДатаОткрСчета TIMESTAMP(3) NULL,
 ДокНаОткрСчета BOOLEAN NULL,
 ЛицСчета INT NULL,
 ТипСчета VARCHAR(15) NULL,
 Организация UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПриемИОбрПоруч (
 primaryKey UUID NOT NULL,
 ВидОперац VARCHAR(255) NULL,
 ВидПлатежа VARCHAR(255) NULL,
 ДатаДоговора TIMESTAMP(3) NULL,
 НазначПлатеж VARCHAR(255) NULL,
 Оплачено BOOLEAN NULL,
 ПодтвВыпБанка BOOLEAN NULL,
 СуммаПлатеж INT NULL,
 СуммаСНДС INT NULL,
 СчетПолуч VARCHAR(255) NULL,
 Организация UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 IDДолжности INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ФормирДосье (
 primaryKey UUID NOT NULL,
 ДатаОформл TIMESTAMP(3) NULL,
 Договора INT NULL,
 НаименДосье VARCHAR(255) NULL,
 Клиенты UUID NOT NULL,
 Организация UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Сотрудники ADD CONSTRAINT FKe5ecf5036053539899cbfb65cf7383292844b1ec FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Indexe5ecf5036053539899cbfb65cf7383292844b1ec on Сотрудники (Должности); 

 ALTER TABLE ОтделОперПодр ADD CONSTRAINT FKc98d2fc6d394bcc2b35063329715ec168286ad9e FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Indexc98d2fc6d394bcc2b35063329715ec168286ad9e on ОтделОперПодр (Сотрудники); 

 ALTER TABLE ОформлДогов ADD CONSTRAINT FK730f0fc28200056dff14494a0d8b18113f57696e FOREIGN KEY (Клиенты) REFERENCES Клиенты; 
CREATE INDEX Index730f0fc28200056dff14494a0d8b18113f57696e on ОформлДогов (Клиенты); 

 ALTER TABLE ОформлДогов ADD CONSTRAINT FKfe67a5d6955a3ca161aa6df5edbed42ddbb5fd9b FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Indexfe67a5d6955a3ca161aa6df5edbed42ddbb5fd9b on ОформлДогов (Организация); 

 ALTER TABLE ОформлДогов ADD CONSTRAINT FK3a2ba1dd1ae79f9357419154916660b48d0491b6 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index3a2ba1dd1ae79f9357419154916660b48d0491b6 on ОформлДогов (Сотрудники); 

 ALTER TABLE ЗакрытиеСчета ADD CONSTRAINT FK0a8f413df16f5d0009c0e4d256413920868fa8a8 FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Index0a8f413df16f5d0009c0e4d256413920868fa8a8 on ЗакрытиеСчета (Организация); 

 ALTER TABLE ЗакрытиеСчета ADD CONSTRAINT FK2723e7917496157044688af5aa17b0d992aebce2 FOREIGN KEY (ОткрытиеСчета) REFERENCES ОткрытиеСчета; 
CREATE INDEX Index2723e7917496157044688af5aa17b0d992aebce2 on ЗакрытиеСчета (ОткрытиеСчета); 

 ALTER TABLE ЗакрытиеСчета ADD CONSTRAINT FKee7f9615ea9b2143875c72485e1e1c72739a5237 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Indexee7f9615ea9b2143875c72485e1e1c72739a5237 on ЗакрытиеСчета (Сотрудники); 

 ALTER TABLE ОткрытиеСчета ADD CONSTRAINT FKc1a609d18df6ee2b4d1ab08a205aa2b71527f1bb FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Indexc1a609d18df6ee2b4d1ab08a205aa2b71527f1bb on ОткрытиеСчета (Организация); 

 ALTER TABLE ОткрытиеСчета ADD CONSTRAINT FK9a9b54aa98521f26a0ce1d4b9035ddf500104151 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index9a9b54aa98521f26a0ce1d4b9035ddf500104151 on ОткрытиеСчета (Сотрудники); 

 ALTER TABLE ПриемИОбрПоруч ADD CONSTRAINT FKa8b9219c2487e94c6f15f3fa27b46554568eacf2 FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Indexa8b9219c2487e94c6f15f3fa27b46554568eacf2 on ПриемИОбрПоруч (Организация); 

 ALTER TABLE ФормирДосье ADD CONSTRAINT FK19574b6f009e0e602e93e963f021c7bae2f547b5 FOREIGN KEY (Клиенты) REFERENCES Клиенты; 
CREATE INDEX Index19574b6f009e0e602e93e963f021c7bae2f547b5 on ФормирДосье (Клиенты); 

 ALTER TABLE ФормирДосье ADD CONSTRAINT FKf9273c0677ac8dcf3d8eacbc235b6158ae477d41 FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Indexf9273c0677ac8dcf3d8eacbc235b6158ae477d41 on ФормирДосье (Организация); 

 ALTER TABLE ФормирДосье ADD CONSTRAINT FK6a7e6dfaf24e69f1dbae69f8af619e959449d623 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index6a7e6dfaf24e69f1dbae69f8af619e959449d623 on ФормирДосье (Сотрудники); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

