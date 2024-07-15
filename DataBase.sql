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


INSERT INTO USERS (user_id, name, email, password)
VALUES (1, 'Juan Pérez', 'juan@example.com', 'secretpassword');

INSERT INTO TICKETS (ticket_id, ticket_type, price, description)
VALUES (1, 'Pase 1 Día', 100.00, 'Acceso a ambos escenarios, Bebida ilimitada');

INSERT INTO TICKETS (ticket_id, ticket_type, price, description)
VALUES (2, 'Pase 2 Días', 180.00, 'Acceso VIP a ambos escenarios, Bebida ilimitada');

INSERT INTO PURCHASES (purchase_id, user_id, ticket_id, quantity, purchase_date, total_amount)
VALUES (1, 1, 1, 2, sysdate, (SELECT price * 2 FROM TICKETS WHERE ticket_id = 1));

INSERT INTO PURCHASES (purchase_id, user_id, ticket_id, quantity, purchase_date, total_amount)
VALUES (2, 1, 2, 2, sysdate, (SELECT price * 2 FROM TICKETS WHERE ticket_id = 2));

