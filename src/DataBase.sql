create table USERS
(
    USER_ID  NUMBER        not null
        primary key,
    NAME     VARCHAR2(255) not null,
    EMAIL    VARCHAR2(255) not null
        unique,
    PASSWORD VARCHAR2(255) not null
)
/

create table TICKETS
(
    TICKET_ID   NUMBER        not null
        primary key,
    TICKET_TYPE VARCHAR2(50)  not null,
    PRICE       NUMBER(10, 2) not null,
    DESCRIPTION VARCHAR2(50)
)
/

create table PURCHASES
(
    PURCHASE_ID   NUMBER        not null
        primary key,
    USER_ID       NUMBER        not null
        references USERS,
    TICKET_ID     NUMBER        not null
        references TICKETS,
    QUANTITY      NUMBER        not null,
    PURCHASE_DATE DATE          not null,
    TOTAL_AMOUNT  NUMBER(10, 2) not null
)
/

create index IDX_PURCHASES_USER_ID
    on PURCHASES (USER_ID)
/

create index IDX_PURCHASES_TICKET_ID
    on PURCHASES (TICKET_ID)
/


