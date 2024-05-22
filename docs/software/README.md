# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:

## SQL-скрипт для створення бази даних

_migration.sql_

```sql
-- CreateEnum
CREATE TYPE "user_system_role" AS ENUM ('user', 'admin');

-- CreateEnum
CREATE TYPE "project_status" AS ENUM ('active', 'inactive');

-- CreateEnum
CREATE TYPE "participant_role" AS ENUM ('author', 'assignee', 'reviewer', 'participant');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "email" VARCHAR(40),
    "phone" VARCHAR(20),
    "avatar" VARCHAR(200),
    "system_role" "user_system_role" NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" SERIAL NOT NULL,
    "content" VARCHAR(240) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sheduled_at" TIMESTAMP NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "user_id" INTEGER NOT NULL,
    "message_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "status" "project_status" NOT NULL DEFAULT 'inactive',
    "start_date" TIMESTAMP NOT NULL,
    "end_date" TIMESTAMP,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,
    "logo" VARCHAR(200),
    "description" VARCHAR(4000),

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(45) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" SERIAL NOT NULL,
    "rule" VARCHAR(45) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grants" (
    "role_id" INTEGER NOT NULL,
    "permission_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "members" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "status" VARCHAR(50) NOT NULL,
    "project_id" INTEGER NOT NULL,
    "description" VARCHAR(500),
    "deadline" TIMESTAMP,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "participants" (
    "id" SERIAL NOT NULL,
    "member_id" INTEGER NOT NULL,
    "task_id" INTEGER NOT NULL,
    "role" "participant_role" NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "participants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "labels" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "color" VARCHAR(15) NOT NULL,

    CONSTRAINT "labels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "label_id" INTEGER NOT NULL,
    "task_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "attachments" (
    "id" SERIAL NOT NULL,
    "url" VARCHAR(200) NOT NULL,
    "format" VARCHAR(15) NOT NULL,
    "task_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "attachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "task_id" INTEGER NOT NULL,
    "participant_id" INTEGER NOT NULL,
    "replied_to" INTEGER,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,
    "content" VARCHAR(1000) NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "notifications_user_id_message_id_key" ON "notifications"("user_id", "message_id");

-- CreateIndex
CREATE UNIQUE INDEX "projects_title_key" ON "projects"("title");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "permissions_rule_key" ON "permissions"("rule");

-- CreateIndex
CREATE UNIQUE INDEX "grants_role_id_permission_id_key" ON "grants"("role_id", "permission_id");

-- CreateIndex
CREATE UNIQUE INDEX "members_user_id_project_id_key" ON "members"("user_id", "project_id");

-- CreateIndex
CREATE INDEX "tasks_project_id_idx" ON "tasks"("project_id");

-- CreateIndex
CREATE UNIQUE INDEX "participants_member_id_task_id_key" ON "participants"("member_id", "task_id");

-- CreateIndex
CREATE UNIQUE INDEX "labels_name_key" ON "labels"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tags_label_id_task_id_key" ON "tags"("label_id", "task_id");

-- CreateIndex
CREATE INDEX "attachments_task_id_idx" ON "attachments"("task_id");

-- CreateIndex
CREATE INDEX "reviews_task_id_idx" ON "reviews"("task_id");

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grants" ADD CONSTRAINT "grants_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grants" ADD CONSTRAINT "grants_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags" ADD CONSTRAINT "tags_label_id_fkey" FOREIGN KEY ("label_id") REFERENCES "labels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags" ADD CONSTRAINT "tags_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attachments" ADD CONSTRAINT "attachments_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_participant_id_fkey" FOREIGN KEY ("participant_id") REFERENCES "participants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_replied_to_fkey" FOREIGN KEY ("replied_to") REFERENCES "reviews"("id") ON DELETE CASCADE ON UPDATE CASCADE;

```

## Заповнення початковими даними для Prisma
_seeds.ts_

```ts
// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles

  await prisma.user.upsert({
    where: { username: 'Roman' },
    update: {},
    create: {
      username: 'Roman',
      password: '2222',
      systemRole: 'admin',
    },
  });

  await prisma.user.upsert({
    where: { username: 'Ivan' },
    update: {},
    create: {
      username: 'Ivan',
      password: '4321',
      systemRole: 'admin',
    },
  });

  await prisma.user.upsert({
    where: { username: 'Mykyta' },
    update: {},
    create: {
      username: 'Mykyta',
      password: '1234',
      systemRole: 'admin',
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });

```

## Сервіси для управління даними

### Налаштування Docker Compose для PostgreSQL
```yml
version: '3.8'
services:

  postgres:
    image: postgres:13.5
    restart: always
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    volumes:
      - postgres:/var/lib/postgresql/data
    ports:
      - '5432:5432'

volumes:
  postgres:

```

### Схема бази даних

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum UserSystemRole {
  user
  admin

  @@map("user_system_role")
}

model User {
  id            Int            @id @default(autoincrement())
  username      String         @unique @db.VarChar(30)
  password      String         @db.VarChar(50)
  email         String?        @unique @db.VarChar(40)
  phone         String?        @unique @db.VarChar(20)
  avatar        String?        @db.VarChar(200)
  systemRole    UserSystemRole @map("system_role")
  createdAt     DateTime       @default(now()) @map("created_at") @db.Timestamp()
  updatedAt     DateTime?      @updatedAt @map("updated_at") @db.Timestamp()
  members       Member[]
  notifications Notification[]

  @@map("users")
}

model Message {
  id            Int            @id @default(autoincrement())
  content       String         @db.VarChar(240)
  createdAt     DateTime       @default(now()) @map("created_at") @db.Timestamp()
  sheduledAt    DateTime       @map("sheduled_at") @db.Timestamp()
  notifications Notification[]

  @@map("messages")
}

model Notification {
  userId    Int     @map("user_id")
  messageId Int     @map("message_id")
  users     User    @relation(fields: [userId], references: [id], onDelete: Cascade)
  messages  Message @relation(fields: [messageId], references: [id], onDelete: Cascade)

  @@unique([userId, messageId])
  @@map("notifications")
}

enum ProjectStatus {
  active
  inactive

  @@map("project_status")
}

model Project {
  id          Int           @id @default(autoincrement())
  title       String        @unique @db.VarChar(50)
  status      ProjectStatus @default(inactive)
  startDate   DateTime      @map("start_date") @db.Timestamp()
  endDate     DateTime?     @map("end_date") @db.Timestamp()
  createdAt   DateTime      @default(now()) @map("created_at") @db.Timestamp()
  updatedAt   DateTime?     @updatedAt @map("updated_at") @db.Timestamp()
  logo        String?       @db.VarChar(200)
  description String?       @db.VarChar(4000)
  members     Member[]
  tasks       Task[]

  @@map("projects")
}

model Roles {
  id      Int      @id @default(autoincrement())
  name    String   @unique @db.VarChar(45)
  grants  Grant[]
  members Member[]

  @@map("roles")
}

model Permission {
  id        Int      @id @default(autoincrement())
  rule      String   @unique @db.VarChar(45)
  createdAt DateTime @default(now()) @map("created_at") @db.Timestamp()
  grants    Grant[]

  @@map("permissions")
}

model Grant {
  roleId       Int        @map("role_id")
  permissionId Int        @map("permission_id")
  createdAt    DateTime   @default(now()) @map("created_at") @db.Timestamp()
  roles        Roles      @relation(fields: [roleId], references: [id], onDelete: Cascade)
  permissions  Permission @relation(fields: [permissionId], references: [id], onDelete: Cascade)

  @@unique([roleId, permissionId])
  @@map("grants")
}

model Member {
  id           Int           @id @default(autoincrement())
  userId       Int           @map("user_id")
  projectId    Int           @map("project_id")
  roleId       Int           @map("role_id")
  createdAt    DateTime      @default(now()) @map("created_at") @db.Timestamp()
  updatedAt    DateTime?     @updatedAt @map("updated_at") @db.Timestamp()
  user         User          @relation(fields: [userId], references: [id], onDelete: Cascade)
  project      Project       @relation(fields: [projectId], references: [id], onDelete: Cascade)
  roles        Roles         @relation(fields: [roleId], references: [id], onDelete: Restrict)
  participants Participant[]

  @@unique([userId, projectId])
  @@map("members")
}

model Task {
  id           Int           @id @default(autoincrement())
  title        String        @db.VarChar(50)
  status       String        @db.VarChar(50)
  projectId    Int           @map("project_id")
  description  String?       @db.VarChar(500)
  deadline     DateTime?     @db.Timestamp()
  createdAt    DateTime      @default(now()) @map("created_at") @db.Timestamp()
  updatedAt    DateTime?     @updatedAt @map("updated_at") @db.Timestamp()
  project      Project       @relation(fields: [projectId], references: [id], onDelete: Cascade)
  participants Participant[]
  tags         Tag[]
  attachments  Attachment[]
  Reviews      Review[]

  @@index([projectId])
  @@map("tasks")
}

enum ParticipantRole {
  author
  assignee
  reviewer
  participant

  @@map("participant_role")
}

model Participant {
  id        Int             @id @default(autoincrement())
  memberId  Int             @map("member_id")
  taskId    Int             @map("task_id")
  role      ParticipantRole
  createdAt DateTime        @default(now()) @map("created_at") @db.Timestamp()
  members   Member          @relation(fields: [memberId], references: [id], onDelete: Cascade)
  tasks     Task            @relation(fields: [taskId], references: [id], onDelete: Cascade)
  Reviews   Review[]

  @@unique([memberId, taskId])
  @@map("participants")
}

model Label {
  id    Int    @id @default(autoincrement())
  name  String @unique @db.VarChar(30)
  color String @db.VarChar(15)
  tags  Tag[]

  @@map("labels")
}

model Tag {
  labelId Int   @map("label_id")
  taskId  Int   @map("task_id")
  labels  Label @relation(fields: [labelId], references: [id], onDelete: Cascade)
  tasks   Task  @relation(fields: [taskId], references: [id], onDelete: Cascade)

  @@unique([labelId, taskId])
  @@map("tags")
}

model Attachment {
  id        Int      @id @default(autoincrement())
  url       String   @db.VarChar(200)
  format    String   @db.VarChar(15)
  taskId    Int      @map("task_id")
  createdAt DateTime @default(now()) @map("created_at") @db.Timestamp()
  tasks     Task     @relation(fields: [taskId], references: [id], onDelete: Cascade)

  @@index([taskId])
  @@map("attachments")
}

model Review {
  id            Int         @id @default(autoincrement())
  taskId        Int         @map("task_id")
  participantId Int         @map("participant_id")
  repliedTo     Int?        @map("replied_to")
  createdAt     DateTime    @default(now()) @map("created_at") @db.Timestamp()
  updatedAt     DateTime?   @updatedAt @map("updated_at") @db.Timestamp()
  content       String      @db.VarChar(1000)
  tasks         Task        @relation(fields: [taskId], references: [id], onDelete: Cascade)
  participants  Participant @relation(fields: [participantId], references: [id], onDelete: Cascade)
  reply         Review?     @relation("ReviewToReview", fields: [repliedTo], references: [id], onDelete: Cascade)
  reviews       Review[]    @relation("ReviewToReview")

  @@index([taskId])
  @@map("reviews")
}
```


### Підключення до бази даних

```ts
import { NestFactory } from "@nestjs/core";
import { UsersModule } from "./users/users.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const config = new DocumentBuilder()
    .setTitle("DB-GROUP2")
    .setDescription("The DB-GROUP2 API description")
    .setVersion("0.1")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
```

### Контролер обробки користувачів

```ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
  NotFoundException,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from "@nestjs/swagger";
import { UserEntity } from "./entities/user.entity";
import { ForbiddenException } from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Controller("users")
@ApiTags("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  create(@Body() createUserDto: CreateUserDTO) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ type: UserEntity })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  @ApiOkResponse({ type: UserEntity })
  async findOne(@Param("id", ParseIntPipe) id: string) {
    const user = await this.usersService.findOne(+id);
    if (!user) {
      throw new NotFoundException(`User with ${id} does not exist.`);
    }
    return user;
  }

  @Put(":id")
  @ApiOkResponse({ type: UserEntity })
  update(
    @Param("id", ParseIntPipe) id: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  @ApiOkResponse({ type: UserEntity })
  async remove(@Param("id", ParseIntPipe) id: string) {
    try {
      return await this.usersService.remove(+id);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException();
      }
    }
  }
}
```

### Сервіс обробки користувачів

```ts
import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDTO) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
```

### DTO для створення нових користувачів

```ts
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { UserSystemRole } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  password: string;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  @IsString()
  @MaxLength(40)
  email?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @ApiProperty({ enum: UserSystemRole })
  @IsEnum(UserSystemRole)
  systemRole: UserSystemRole;
}
```

### DTO для оновлення існуючих користувачів

```ts
import { PartialType } from "@nestjs/swagger";
import { CreateUserDTO } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDTO) {}
```

### Модуль API

```ts
import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [PrismaModule],
})
export class UsersModule {}
```

### Запуск додатку

```ts
import { NestFactory } from "@nestjs/core";
import { UsersModule } from "./users/users.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const config = new DocumentBuilder()
    .setTitle("DB-GROUP2")
    .setDescription("The DB-GROUP2 API description")
    .setVersion("0.1")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
```
