ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
flush privileges;

drop database QuanLyHomstay;
create database QuanLyHomstay;
use  QuanLyHomstay;


create table City (
	idCity int primary key auto_increment,
    nameCity varchar(50)
);

create table Homestay (
	id int primary key auto_increment,
    name varchar(50),
    idCity int,
    num_bedroom int check (num_bedroom > 0),
    price float check (price > 0),
    num_badroom int check (num_badroom > 0),
    descript varchar(255),
    foreign key (idCity) references City(idCity)
);

insert into City (nameCity)
values	('Hà Nội'),
		('HCM'),
		('Đà Nẵng');

insert into Homestay (name, idCity, num_bedroom, price, num_badroom, descript)
values	('Royal', 1, 3, 2000, 2, 'mô tả 1'),
		('Vin', 1, 4, 3000, 2, 'mô tả 2'),
		('King', 2, 2, 1500, 1, 'mô tả 3'),
		('Queen', 3, 1, 1000, 1, 'mô tả 4'),
		('Arial', 3, 2, 1500, 1, 'mô tả 5');
        
        