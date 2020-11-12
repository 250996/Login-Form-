use developscripts;
-- create table users(
-- UserID INT,
-- UserName varchar(255) not null,
-- Primary key (UserID)
-- );
insert into users
values(101,"Fredrick"),
(102,"Smith"),
(103,"Patrick"),
(104,"Jonathan"),
(105,"David"),
(106,"Abraham"),
(107,"Tommy"),
(108,"Angela"),
(109,"Christa");
-- create table categories(
-- CategoryID INT ,
-- CategoryName varchar(255) not null,
-- primary key (CategoryId)
-- );
insert into categories
values (111,"SocialMedia"),
(222,"Gaming"),
(333,"OnlineShopping"),
(444,"DataSecurity"),
(555,"OnlineChat");
-- create table projects (
-- UserID INT,
-- ProjectName varchar(255),
-- CategoryID INT,
-- Foreign key (UserID) references users(UserID),
-- Foreign key (CategoryID) references categories(CategoryID)
-- );
insert into projects
values (101,"Surfer",111),
(102,"FightKnockOut",222),
(103,"Purchaser",333),
(104,"FullEndSecurity",444),
(105,"Chatter",555),
(106,"FullEndSecurity",444),
(107,"Chatter",555),
(108,"Surfer",111),
(109,"FightKnockOut",222);
