require('dotenv').config();
const getDB = require('./getDB.js');
const bcrypt = require('bcrypt');

const populate = async () => {
  let connection = await getDB();
  try {
    const defaultPassword = 'Pass1234';
    const defaultDirectory = 'http://localhost:3000/uploads/rent_images/';
    const hashedPass = await bcrypt.hash(defaultPassword, 10);

    console.log('Rellenando tabla users');
    await connection.query(
      `
      INSERT INTO users (username, email, password, active)
      VALUES 
      ('Manu','konstantinoff080696@gmail.com','${hashedPass}', 1),
      ('Oscar','oscar@email.com','${hashedPass}', 1),
      ('Yese','yese.astarloa@gmail.com','${hashedPass}', 1),
      ('Toni','antoniorondanvlc@gmail.com','${hashedPass}', 1),
      ('Paco','paco@email.com','${hashedPass}', 1),
      ('Elena','elena@email.com','${hashedPass}', 1),
      ('Selene','selene@email.com','${hashedPass}', 1),
      ('Esteban','esteban@email.com','${hashedPass}', 1),
      ('Maria','maria@email.com','${hashedPass}', 1),
      ('Susana','susana@email.com','${hashedPass}', 1),
      ('Juan','juan@email.com','${hashedPass}', 1),
      ('Ana','ana@email.com','${hashedPass}', 1),
      ('Miguel','miguel@email.com','${hashedPass}', 1),
      ('Sofia','sofia@email.com','${hashedPass}', 1),
      ('David','david@email.com','${hashedPass}', 1),
      ('Laura','laura@email.com','${hashedPass}', 1),
      ('Carlos','carlos@email.com','${hashedPass}', 1),
      ('Isabel','isabel@email.com','${hashedPass}', 1),
      ('Alejandro','alejandro@email.com','${hashedPass}', 1),
      ('Valeria','valeria@email.com','${hashedPass}', 1)
      `
    );

    console.log('Rellenando tabla rentings');
    await connection.query(
      `
      INSERT INTO rentings (rent_id, rent_owner, rent_title, rent_type, rent_rooms, rent_description, rent_price, rent_location, rent_address, rent_cover, active, createdAt)
      VALUES
      (1, 'Manu', 'Piso en playa', 'Piso', 4, 'Piso cerca de la playa', 650, 'Andalucia', 'Villarán, Sanlúcar la Mayor, Sevilla, Andalucía, España', '${defaultDirectory}cdade9bc-f3e7-4b5d-8eb3-0a639d4f0ae0.webp', 1, '2024-04-21 19:27:47'),
      (2, 'Manu', 'Chalet de campo', 'Chalet', 3, 'Chalet de campo', 499, 'Aragon', 'Monflorite-Lascasas, Hoya de Huesca, Aragón, España', '${defaultDirectory}88b757bc-58cc-4dcb-8f4c-1c4e25cb3492.webp', 1, '2024-04-21 19:27:47'),
      (3, 'Oscar', 'Piso en playa', 'Piso', 2, 'Piso cerca de la playa', 1250, 'Asturias', 'Gijón, Asturias, España', '${defaultDirectory}4237e539-a9da-432e-9960-f897344fc6fc.webp', 1, '2024-04-21 19:27:47'),
      (4, 'Oscar', 'Casa rural', 'Casa', 7, 'Casa rural', 645, 'Balears', 'Galilea, Puigpuñent, Sierra de Tramontana, Islas Baleares, 07196, España', '${defaultDirectory}7997c201-e226-490b-81cc-84d4694d5705.webp', 1, '2024-04-21 19:27:47'),
      (5, 'Yese', 'Chalet de campo', 'Chalet', 2, 'Chalet de campo', 500, 'Canarias', 'La Zarza, Sabina Alta, Fasnia, Santa Cruz de Tenerife, Canarias, España', '${defaultDirectory}a0355a92-84da-4a73-9149-b76a2c477cc3.webp', 1, '2024-04-21 19:27:47'),
      (6, 'Yese', 'Piso en playa', 'Piso', 5, 'Piso cerca de la playa', 170, 'Cantabria', 'Santander, Cantabria, España', '${defaultDirectory}0aa5c2a7-0db5-4764-8cbc-118d133873e8.webp', 1, '2024-04-21 19:27:47'),
      (7, 'Toni', 'Apartamento rural', 'Apartamento', 7, 'Apartamento rural', 1790, 'Castilla y Leon', 'Peñafiel, Callejón de Los Comuneros, Peñafiel, Valladolid, Castilla y León, 47300, España', '${defaultDirectory}ff0191cf-a173-400a-9ab0-0a161490d253.webp', 1, '2024-04-21 19:27:47'),
      (8, 'Toni', 'Chalet de campo', 'Chalet', 3, 'Chalet de campo', 360, 'Castilla La Mancha', 'Yepes, Toledo, Castilla-La Mancha, 45313, España', '${defaultDirectory}42b6b338-c262-4208-b0a8-283377e30046.webp', 1, '2024-04-21 19:27:47'),
      (9, 'Paco', 'Piso en playa', 'Piso', 1, 'Piso cerca de la playa', 900, 'Cataluña', 'Barcelona, Cataluña, España', '${defaultDirectory}9aa894ac-e914-4707-a5d6-98ccd13f390d.webp', 1, '2024-04-21 19:27:47'),
      (10, 'Paco', 'Casa rural', 'Casa', 8, 'Casa rural', 2000, 'Comunidad Valenciana', 'Burjassot, Valencia, España', '${defaultDirectory}ca6dc9ba-72c6-4b2b-988b-fbca946f78ec.webp', 1, '2024-04-21 19:27:47'),
      (11, 'Elena', 'Chalet de campo', 'Chalet', 5, 'Chalet de campo', 45, 'Extremadura', 'Arroyomolinos, Cáceres, Extremadura, España', '${defaultDirectory}9306fcf7-cd52-4a36-ac57-618147a20f41.webp', 1, '2024-04-21 19:27:47'),
      (12, 'Elena', 'Piso en playa', 'Piso', 3, 'Piso cerca de la playa', 70, 'Galicia', 'La Coruña, Galicia, España', '${defaultDirectory}7440f47d-d144-41c9-8d7d-152c2f2b7c9d.webp', 1, '2024-04-21 19:27:47'),
      (13, 'Selene', 'Casa rural', 'Casa', 5, 'Casa rural', 60, 'Madrid', 'Colmenar Viejo, Navarrosillos-Polígono Sur, Colmenar Viejo, Comunidad de Madrid, España', '${defaultDirectory}069a5baa-6c49-44ba-8c5b-27c32065d41f.webp', 1, '2024-04-21 19:27:47'),
      (14, 'Selene', 'Chalet de campo', 'Chalet', 3, 'Chalet de campo', 15, 'Murcia', 'Matanzas, Santomera, Área Metropolitana de Murcia, Región de Murcia, 30140, España', '${defaultDirectory}6465b544-9f99-4180-8178-4dbc560120ef.webp', 1, '2024-04-21 19:27:47'),
      (15, 'Esteban', 'Apartamento rural', 'Apartamento', 9, 'Apartamento rural', 965, 'Navarra', 'Pamplona, Comarca de Pamplona, Navarra, España', '${defaultDirectory}3160a4d9-c5b8-4430-ba39-3741d75936a7.webp', 1, '2024-04-21 19:27:47'),
      (16, 'Esteban', 'Piso en playa', 'Piso', 6, 'Piso cerca de la playa', 80, 'Pais Vasco', 'San Sebastián, Guipúzcoa, País Vasco, España', '${defaultDirectory}85503429-b643-46a5-bb26-ed5c9b2c76b6.webp', 1, '2024-04-21 19:27:47'),
      (17, 'Maria', 'Casa rural', 'Casa', 6, 'Casa rural', 70, 'Rioja', 'Logroño, La Rioja, España', '${defaultDirectory}e9c961c9-3736-4f78-bfe1-981deb15a5ce.webp', 1, '2024-04-21 19:27:47'),
      (18, 'Maria', 'Apartamento rural', 'Apartamento', 3, 'Apartamento rural', 80, 'Ceuta', 'Benzú, Fronteriza, Ceuta, 51004, España', '${defaultDirectory}244d1048-d3fe-473a-9046-4cb29bbc1e92.webp', 1, '2024-04-21 19:27:47'),
      (19, 'Susana', 'Casa rural', 'Casa', 2, 'Casa rural', 90, 'Melilla', 'Melilla, España', '${defaultDirectory}e5c488c7-d3c9-4567-9b66-9fc79757332a.webp', 1, '2024-04-21 19:27:47'),
      (20, 'Susana', 'Apartamento rural', 'Apartamento', 1, 'Apartamento rural', 60, 'Galicia', 'San Ciprián, Cervo, Mariña Occidental, Lugo, Galicia, 27890, España', '${defaultDirectory}75bb8f80-7792-494f-aea4-e75d1eb56fc9.webp', 1, '2024-04-21 19:27:47');
      `
    );

    console.log('Rellenando tabla rentals');
    await connection.query(
      `
      INSERT INTO rentals (rental_rent_id, rental_owner, rental_tenant, rental_start, rental_end, rental_status)
      VALUES 
      (1, 'Manu', 'Susana', '2022-01-11', '2022-01-18', 'Aceptado'),
      (2, 'Manu', 'Maria', '2022-02-12', '2022-02-19', 'Aceptado'),
      (3, 'Oscar', 'Yese', '2022-03-13', '2022-03-20', 'Aceptado'),
      (4, 'Oscar', 'Selene', '2022-04-14', '2022-04-21', 'Aceptado'),
      (5, 'Yese', 'Esteban', '2022-05-15', '2022-05-22', 'Aceptado'),
      (6, 'Yese', 'Manu', '2022-06-16', '2022-06-23', 'Aceptado'),
      (7, 'Toni', 'Laura', '2022-07-17', '2022-07-24', 'Aceptado'),
      (8, 'Toni', 'Paco', '2022-08-18', '2022-08-25', 'Aceptado'),
      (9, 'Paco', 'Toni', '2022-09-19', '2022-09-26', 'Aceptado'),
      (10, 'Paco', 'David', '2022-10-20', '2022-10-27', 'Aceptado'),
      (11, 'Elena', 'David', '2022-11-21', '2022-11-28', 'Aceptado'),
      (12, 'Elena', 'Maria', '2022-12-22', '2022-12-29', 'Aceptado'),
      (13, 'Selene', 'Isabel', '2023-01-23', '2023-01-30', 'Aceptado'),
      (14, 'Selene', 'Susana', '2023-02-24', '2023-03-03', 'Aceptado'),
      (15, 'Esteban', 'Alejandro', '2023-03-25', '2023-04-01', 'Aceptado'),
      (16, 'Esteban', 'Valeria', '2023-04-26', '2023-05-03', 'Aceptado'),
      (17, 'Maria', 'Manu', '2023-05-27', '2023-06-03', 'Aceptado'),
      (18, 'Maria', 'Yese', '2023-06-28', '2023-07-05', 'Aceptado'),
      (19, 'Susana', 'Toni', '2023-07-29', '2023-08-05', 'Aceptado'),
      (20, 'Susana', 'Paco', '2023-08-30', '2023-09-06', 'Aceptado'),
      (1, 'Manu', 'Susana', '2023-09-11', '2023-09-18', 'Aceptado'),
      (2, 'Manu', 'Maria', '2023-10-12', '2023-10-19', 'Aceptado'),
      (3, 'Oscar', 'Yese', '2023-11-13', '2023-11-20', 'Aceptado'),
      (4, 'Oscar', 'Selene', '2023-12-14', '2023-12-21', 'Aceptado'),
      (5, 'Yese', 'Esteban', '2024-01-15', '2024-01-22', 'Aceptado'),
      (6, 'Yese', 'Manu', '2024-02-16', '2024-02-23', 'Aceptado'),
      (7, 'Toni', 'Laura', '2024-03-17', '2024-03-24', 'Aceptado'),
      (8, 'Toni', 'Paco', '2024-04-18', '2024-04-25', 'Aceptado'),
      (9, 'Paco', 'Toni', '2024-05-19', '2024-05-26', 'Aceptado'),
      (10, 'Paco', 'David', '2024-06-20', '2024-06-27', 'Aceptado'),
      (11, 'Elena', 'David', '2024-07-21', '2024-07-28', 'Aceptado'),
      (12, 'Elena', 'Maria', '2024-08-22', '2024-08-29', 'Aceptado'),
      (13, 'Selene', 'Isabel', '2024-09-23', '2024-09-30', 'Aceptado'),
      (14, 'Selene', 'Susana', '2024-10-24', '2024-10-31', 'Aceptado'),
      (15, 'Esteban', 'Alejandro', '2024-11-25', '2024-12-02', 'Aceptado'),
      (16, 'Esteban', 'Valeria', '2024-12-26', '2024-12-03', 'Aceptado'),
      (17, 'Maria', 'Manu', '2025-01-27', '2025-01-04', 'Aceptado'),
      (18, 'Maria', 'Yese', '2025-02-28', '2025-02-05', 'Aceptado'),
      (19, 'Susana', 'Toni', '2025-03-29', '2025-03-06', 'Aceptado'),
      (20, 'Susana', 'Paco', '2025-04-30', '2025-04-07', 'Aceptado')
      `
    );

    console.log('Rellenando tabla rent_images');
    await connection.query(
      `
      INSERT INTO rent_images (rent_image_id, rent_id, rent_image, createdAt)
      VALUES
      (1, 1, '${defaultDirectory}455994e5-7a26-4ea4-bead-2dea98cd90c3.webp', '2024-04-21 19:27:47'),
      (2, 1, '${defaultDirectory}fb3d8ce3-6457-4452-8119-62fe99ca506e.webp', '2024-04-21 19:27:47'),
      (3, 1, '${defaultDirectory}8a36d190-4aad-47dc-bffb-b124efb67f56.webp', '2024-04-21 19:27:47'),
      (4, 1, '${defaultDirectory}9e2bd8c1-388a-4122-a443-0eec47b58169.webp', '2024-04-21 19:27:47'),
      (5, 1, '${defaultDirectory}4d0d78f8-a0ca-4cd5-92ef-b54eb8ef0451.webp', '2024-04-21 19:27:47'),
      (6, 2, '${defaultDirectory}6ca9d888-397e-4e8a-981d-087b067270bd.webp', '2024-04-21 19:27:47'),
      (7, 2, '${defaultDirectory}f76cf022-bea3-4e23-a3df-b47949cff242.webp', '2024-04-21 19:27:47'),
      (8, 2, '${defaultDirectory}189249c7-4b7b-46fc-b7d4-6af28557654b.webp', '2024-04-21 19:27:47'),
      (9, 2, '${defaultDirectory}a83d7620-5595-4251-9d12-128bd1a51b0c.webp', '2024-04-21 19:27:47'),
      (10, 2, '${defaultDirectory}357b4c31-4184-47df-b6ea-399aab00e2d7.webp', '2024-04-21 19:27:47'),
      (11, 3, '${defaultDirectory}168d1c50-f899-4a02-9267-c088d4e4ec2f.webp', '2024-04-21 19:27:47'),
      (12, 3, '${defaultDirectory}bb9df47c-a9d8-4af1-8dd7-bc3688c53721.webp', '2024-04-21 19:27:47'),
      (13, 3, '${defaultDirectory}8572081c-f56f-46c2-8423-8671949d2d70.webp', '2024-04-21 19:27:47'),
      (14, 3, '${defaultDirectory}7f232031-5fac-4517-8755-edecc1f87df9.webp', '2024-04-21 19:27:47'),
      (15, 3, '${defaultDirectory}c6402626-292a-48c8-a77e-b46f09c34210.webp', '2024-04-21 19:27:47'),
      (16, 3, '${defaultDirectory}59a9ff90-6a06-4b13-902b-ebb7c7765cc3.webp', '2024-04-21 19:27:47'),
      (17, 3, '${defaultDirectory}61384013-6193-4159-b38c-57ce1dcc9f0e.webp', '2024-04-21 19:27:47'),
      (18, 4, '${defaultDirectory}b465c0f0-7f09-482d-8ee7-ae610588d17f.webp', '2024-04-21 19:27:47'),
      (19, 4, '${defaultDirectory}645b2906-0dcf-4e3f-a51a-31e9d0f96e12.webp', '2024-04-21 19:27:47'),
      (20, 4, '${defaultDirectory}baba3829-f035-4426-882d-6558bd822b96.webp', '2024-04-21 19:27:47'),
      (21, 4, '${defaultDirectory}4c4b47c9-08c6-4713-a8b8-e10e62e99a8a.webp', '2024-04-21 19:27:47'),
      (22, 4, '${defaultDirectory}e5380046-c60a-415d-8bf6-0f6c631f3671.webp', '2024-04-21 19:27:47'),
      (23, 4, '${defaultDirectory}26c3a405-2f0a-4cb1-b06c-f44e5156dfee.webp', '2024-04-21 19:27:47'),
      (24, 5, '${defaultDirectory}c0199d5d-eafa-4b73-a54d-79c2a383a13a.webp', '2024-04-21 19:28:22'),
      (25, 5, '${defaultDirectory}89b8765e-a3af-44ed-96a2-c6a8f692d4e3.webp', '2024-04-21 19:28:22'),
      (26, 5, '${defaultDirectory}5f1d0696-32d5-4892-aff4-900cb42dc1a2.webp', '2024-04-21 19:28:22'),
      (27, 5, '${defaultDirectory}7903eb8f-5efe-4195-a65d-258311aa3bd0.webp', '2024-04-21 19:28:22'),
      (28, 5, '${defaultDirectory}90cf65a5-cac9-422d-8cde-d4bab027967e.webp', '2024-04-21 19:28:22'),
      (29, 5, '${defaultDirectory}b0d91a8e-f8a0-4adb-b23f-95ba029dd28b.webp', '2024-04-21 19:28:22'),
      (30, 5, '${defaultDirectory}253dd31c-162d-4fda-accc-ea13cd728248.webp', '2024-04-21 19:28:22'),
      (31, 6, '${defaultDirectory}07ce21bb-df23-4fe2-84b1-552cb86141b4.webp', '2024-04-21 19:30:21'),
      (32, 6, '${defaultDirectory}a82508dc-cfa1-40f5-9182-788590f299ab.webp', '2024-04-21 19:30:21'),
      (33, 6, '${defaultDirectory}f35da4be-7d9b-493d-8ec7-1cdc6a469f0e.webp', '2024-04-21 19:30:21'),
      (34, 6, '${defaultDirectory}0d03deb8-ddd8-459a-a20e-43f648318ac2.webp', '2024-04-21 19:30:21'),
      (35, 6, '${defaultDirectory}837dfb84-7461-4a89-ac18-8b9b72596fa9.webp', '2024-04-21 19:30:21'),
      (36, 6, '${defaultDirectory}092204cc-7c9d-4071-8ad5-40a2912119ea.webp', '2024-04-21 19:30:21'),
      (37, 7, '${defaultDirectory}3e954af9-d894-4139-9835-4cde7ab6304f.webp', '2024-04-21 19:31:20'),
      (38, 7, '${defaultDirectory}ac5c2cac-2df2-44cb-9fa9-ed700aa0f7cd.webp', '2024-04-21 19:31:20'),
      (39, 7, '${defaultDirectory}632361ba-4d69-4e8c-82e3-98f23942d552.webp', '2024-04-21 19:31:20'),
      (40, 7, '${defaultDirectory}4d96edc1-7711-4118-8f96-ee6d30fdb2f2.webp', '2024-04-21 19:31:20'),
      (41, 7, '${defaultDirectory}bf17295e-88a4-4c87-9640-7c5ea858ddf2.webp', '2024-04-21 19:31:21'),
      (42, 8, '${defaultDirectory}14056ebe-d2e3-42fe-9fa0-66e35c84dd42.webp', '2024-04-21 19:32:02'),
      (43, 8, '${defaultDirectory}82cd1715-db8c-4a49-b5c4-3cbacc9869c5.webp', '2024-04-21 19:32:02'),
      (44, 8, '${defaultDirectory}81bd5485-40f9-4903-8e1f-47a9abfcf621.webp', '2024-04-21 19:32:02'),
      (45, 8, '${defaultDirectory}09d4e8cc-09e5-4676-82a9-a0ecd5735ad4.webp', '2024-04-21 19:32:02'),
      (46, 8, '${defaultDirectory}ab6b28ab-2f1f-40fc-9511-1c21917beab5.webp', '2024-04-21 19:32:02'),
      (47, 8, '${defaultDirectory}61f129c7-3116-4552-b63d-f52b6c730e93.webp', '2024-04-21 19:32:02'),
      (48, 8, '${defaultDirectory}8fad7432-3a5f-47f1-9284-6cbe17b6c408.webp', '2024-04-21 19:32:02'),
      (49, 10, '${defaultDirectory}103bcb09-337d-43fc-ac6d-6344ce762d94.webp', '2024-04-21 19:40:39'),
      (50, 10, '${defaultDirectory}1a534a90-ba62-4711-af61-61a49c42d570.webp', '2024-04-21 19:40:39'),
      (51, 10, '${defaultDirectory}0dc2c245-5796-4969-9f58-c047f3d1a018.webp', '2024-04-21 19:40:39'),
      (52, 10, '${defaultDirectory}90ac94a0-36eb-43a3-b6d5-25d2c4b8b197.webp', '2024-04-21 19:40:39'),
      (53, 10, '${defaultDirectory}0db3555b-a475-46a0-af44-29d845195a37.webp', '2024-04-21 19:40:39'),
      (54, 10, '${defaultDirectory}88e33444-a831-466a-8d35-1a19df1e54ad.webp', '2024-04-21 19:40:39'),
      (55, 9, '${defaultDirectory}a362f268-641a-4365-bb35-52e79319a246.webp', '2024-04-21 19:41:17'),
      (56, 9, '${defaultDirectory}f9ee1780-8fd8-4c69-ae4c-c8e89bcdc794.webp', '2024-04-21 19:41:17'),
      (57, 9, '${defaultDirectory}8f15c629-7d65-43ed-8fe2-b9b4e584d398.webp', '2024-04-21 19:41:17'),
      (58, 9, '${defaultDirectory}c3426d0c-8ced-4418-87e0-9b02033644db.webp', '2024-04-21 19:41:17'),
      (59, 9, '${defaultDirectory}9db4db6c-9c2f-4a6a-91d9-3ea8d3a86851.webp', '2024-04-21 19:41:17'),
      (60, 9, '${defaultDirectory}8b9a4df8-3641-418c-8bb2-0c3c0581fa01.webp', '2024-04-21 19:41:17'),
      (61, 11, '${defaultDirectory}3e84f693-795f-48bb-acc5-5babe0dc32ed.webp', '2024-04-21 19:45:16'),
      (62, 11, '${defaultDirectory}80418274-224c-4305-8f33-dbb2f2a03a67.webp', '2024-04-21 19:45:16'),
      (63, 11, '${defaultDirectory}74cc3767-ee75-4bbb-9a94-ec4d78c2cb0a.webp', '2024-04-21 19:45:16'),
      (64, 11, '${defaultDirectory}a249965e-96f6-4094-8d34-3365371e1213.webp', '2024-04-21 19:45:16'),
      (65, 11, '${defaultDirectory}c3c2bd3e-120d-4a56-891c-bd7347b2942b.webp', '2024-04-21 19:45:16'),
      (66, 12, '${defaultDirectory}eaeb5acb-a363-4a35-b2a5-85e59289ffc3.webp', '2024-04-21 19:46:13'),
      (67, 12, '${defaultDirectory}5b17254d-963e-4585-a4da-452c9939fc71.webp', '2024-04-21 19:46:13'),
      (68, 12, '${defaultDirectory}ebc6163c-6b20-413e-bbc6-287362444dff.webp', '2024-04-21 19:46:13'),
      (69, 12, '${defaultDirectory}148774b3-388b-46c0-87c5-713855dfbd02.webp', '2024-04-21 19:46:13'),
      (70, 12, '${defaultDirectory}80fb9410-5640-4db3-a5d2-be64e93d70b3.webp', '2024-04-21 19:46:13'),
      (71, 13, '${defaultDirectory}0bf70838-d1c1-4775-96b8-96433ff38d88.webp', '2024-04-21 19:47:18'),
      (72, 13, '${defaultDirectory}a0e319aa-95bc-44e5-8b56-5a3df3441b62.webp', '2024-04-21 19:47:18'),
      (73, 13, '${defaultDirectory}a7770003-49b1-4dd9-bf8b-45259c2d2693.jpg', '2024-04-21 19:47:18'),
      (74, 13, '${defaultDirectory}6718e31f-d93a-46d2-b3bf-517749b87a75.webp', '2024-04-21 19:47:18'),
      (75, 13, '${defaultDirectory}27881c2c-0644-4560-adb0-ae0badebe9d8.webp', '2024-04-21 19:47:18'),
      (76, 13, '${defaultDirectory}a0aaec72-8563-489b-8140-4133df87e665.webp', '2024-04-21 19:47:18'),
      (77, 14, '${defaultDirectory}6a7f1bda-9c5c-4a41-81ef-6a8c8af1ab8c.webp', '2024-04-21 19:48:00'),
      (78, 14, '${defaultDirectory}e2892ea9-da91-4a37-94f7-ce85f8ba9e3b.webp', '2024-04-21 19:48:00'),
      (79, 14, '${defaultDirectory}8d108505-9fb6-4fdd-a524-de9efe3ebd80.webp', '2024-04-21 19:48:00'),
      (80, 14, '${defaultDirectory}f30582cf-6e12-4089-ae5e-b25150247323.webp', '2024-04-21 19:48:00'),
      (81, 14, '${defaultDirectory}09611bbc-b4e9-425c-b557-5860a84164b8.webp', '2024-04-21 19:48:00'),
      (82, 14, '${defaultDirectory}9fa92792-f9dd-4e1b-b6c6-3187951175d6.webp', '2024-04-21 19:48:00'),
      (83, 14, '${defaultDirectory}6e2c5eb5-bd55-43f8-a18d-0e4435d5a798.webp', '2024-04-21 19:48:00'),
      (84, 15, '${defaultDirectory}2aa632f6-89e9-4261-ac62-386cee645233.webp', '2024-04-21 19:48:45'),
      (85, 15, '${defaultDirectory}e273b764-353c-45cb-ba76-7a9eb67cc9e7.webp', '2024-04-21 19:48:45'),
      (86, 15, '${defaultDirectory}05041b13-8a30-48fc-bb0b-e8bce55f9376.webp', '2024-04-21 19:48:45'),
      (87, 15, '${defaultDirectory}9baedbf6-1c5f-45a2-8e58-ccf2ee9c38b3.webp', '2024-04-21 19:48:45'),
      (88, 15, '${defaultDirectory}a41df976-acfe-4515-906b-184d11e07b37.webp', '2024-04-21 19:48:45'),
      (89, 15, '${defaultDirectory}468a40aa-798a-40e8-afbd-d10e553711f7.webp', '2024-04-21 19:48:45'),
      (90, 15, '${defaultDirectory}59ea5a9b-8dc5-4afa-9ba9-34baa98476c4.webp', '2024-04-21 19:48:45'),
      (91, 16, '${defaultDirectory}bdc9ce4a-a784-44d0-9c9b-f82a707a50b2.webp', '2024-04-21 19:49:29'),
      (92, 16, '${defaultDirectory}f779934b-3c51-443e-9991-8acbf5dd7efe.webp', '2024-04-21 19:49:29'),
      (93, 16, '${defaultDirectory}0793f8e9-e130-4970-b276-a576c3a6dbbe.webp', '2024-04-21 19:49:29'),
      (94, 16, '${defaultDirectory}f8a61316-de12-4463-aab3-30a8001ca0b9.webp', '2024-04-21 19:49:29'),
      (95, 16, '${defaultDirectory}75974e1d-d1da-4eb6-a848-56911ae3961f.webp', '2024-04-21 19:49:29'),
      (96, 16, '${defaultDirectory}e8e230aa-6add-4785-bb4d-d54e1f182013.webp', '2024-04-21 19:49:29'),
      (97, 17, '${defaultDirectory}152d7454-b512-45e2-9d67-8c63b5511338.webp', '2024-04-21 19:50:26'),
      (98, 17, '${defaultDirectory}69f22017-a122-495c-8afb-0b8b3df48c99.webp', '2024-04-21 19:50:26'),
      (99, 17, '${defaultDirectory}2b130339-c98c-4023-9d06-db2328bd9c02.webp', '2024-04-21 19:50:26'),
      (100, 17, '${defaultDirectory}cee5fb97-fd53-40cb-932d-94210f97a8b2.webp', '2024-04-21 19:50:26'),
      (101, 17, '${defaultDirectory}ab451bf0-2897-4718-a54d-41170c2ef2e6.webp', '2024-04-21 19:50:26'),
      (102, 17, '${defaultDirectory}ecabb581-e7ca-436e-9a69-d857e0b4274d.webp', '2024-04-21 19:50:26'),
      (103, 17, '${defaultDirectory}c098f8bf-2102-4f70-a96f-a33322fd1669.webp', '2024-04-21 19:50:26'),
      (104, 18, '${defaultDirectory}052b68f2-7c47-4a3d-b932-b5c158618e19.webp', '2024-04-21 19:51:27'),
      (105, 18, '${defaultDirectory}5e418575-5c07-41d0-a1b7-37e6d6350397.webp', '2024-04-21 19:51:27'),
      (106, 18, '${defaultDirectory}9d2421db-16a0-49f3-af15-883a1ada16f8.webp', '2024-04-21 19:51:27'),
      (107, 18, '${defaultDirectory}64a72f43-804e-425c-b868-82b9c987f98f.webp', '2024-04-21 19:51:27'),
      (108, 18, '${defaultDirectory}43572cc5-bde1-46ab-86b2-ed5c4654b9bd.webp', '2024-04-21 19:51:27'),
      (109, 18, '${defaultDirectory}c30c1979-24ad-4ed7-9650-9f21476ddfd7.webp', '2024-04-21 19:51:27'),
      (110, 19, '${defaultDirectory}4108d912-f4bf-4f9b-8544-703317bf977b.webp', '2024-04-21 19:52:11'),
      (111, 19, '${defaultDirectory}0936e84c-3683-4cf4-9442-01b1a3016374.webp', '2024-04-21 19:52:11'),
      (112, 19, '${defaultDirectory}793d871f-0b1f-4c39-afdd-984f4d8a5271.webp', '2024-04-21 19:52:11'),
      (113, 19, '${defaultDirectory}c46ebfe9-d974-4612-81c1-623a414e44d1.webp', '2024-04-21 19:52:11'),
      (114, 19, '${defaultDirectory}e2fa5c6d-db3d-432d-8099-6b37d98d1bb0.webp', '2024-04-21 19:52:11'),
      (115, 19, '${defaultDirectory}e7978151-b25f-48d9-8c6a-b105ff421337.webp', '2024-04-21 19:52:11'),
      (116, 19, '${defaultDirectory}57028a79-51a4-4d3b-b529-db232bae4cfd.webp', '2024-04-21 19:52:12'),
      (117, 20, '${defaultDirectory}1da9d55d-9f31-421e-aabf-3fdcb27882f4.webp', '2024-04-21 19:53:42'),
      (118, 20, '${defaultDirectory}3c0c31d1-2e7d-4f15-8af3-8b21ada1adff.webp', '2024-04-21 19:53:42'),
      (119, 20, '${defaultDirectory}7a9dcf69-19fc-43df-895c-6b10b97ff3ef.webp', '2024-04-21 19:53:42'),
      (120, 20, '${defaultDirectory}7f31937b-c29d-4701-b37c-20526e3d5e12.webp', '2024-04-21 19:53:42'),
      (121, 20, '${defaultDirectory}40028e54-6e5b-472c-850f-4f9165292fac.webp', '2024-04-21 19:53:42'),
      (122, 20, '${defaultDirectory}360bafa7-6fb1-46ae-806e-35dd117340b5.webp', '2024-04-21 19:53:43'),
      (123, 20, '${defaultDirectory}7efbb46a-04fe-45f9-ade6-d76c29247388.webp', '2024-04-21 19:53:43'),
      (124, 20, '${defaultDirectory}f1896dbc-579d-413c-802f-2f7b304c3a72.webp', '2024-04-21 19:53:43'),
      (125, 20, '${defaultDirectory}1bd9b60c-1c5b-40c8-aa17-865376243874.webp', '2024-04-21 19:53:43');
      `
    );

    console.log('Rellenando tabla owner_ratings');
    await connection.query(
      `
      INSERT INTO owner_ratings (owner, tenant, renting_id, rating, comments)
      VALUES
      ('Manu', 'Susana', 1, 4, 'Excelente lugar para unas vacaciones'),
      ('Manu', 'Maria', 2, 5, 'El mejor lugar para relajarse y disfrutar'),
      ('Oscar', 'Yese', 3, 1, 'No recomendaría este lugar para vacaciones'),
      ('Oscar', 'Selene', 4, 2, 'La experiencia no fue lo que esperaba'),
      ('Yese', 'Esteban', 5, 4, 'Un destino perfecto para unas vacaciones'),
      ('Yese', 'Manu', 6, 2, 'No quedé satisfecho con mi estancia'),
      ('Toni', 'Laura', 7, 3, 'Un lugar tranquilo y hermoso para descansar'),
      ('Toni', 'Paco', 8, 5, 'Las mejores vacaciones que he tenido'),
      ('Paco', 'Toni', 9, 2, 'No volvería a este lugar para vacacionar'),
      ('Paco', 'David', 10, 2, 'No cumplió con mis expectativas de vacaciones'),
      ('Elena', 'David', 11, 5, 'Un destino increíble para unas vacaciones inolvidables'),
      ('Elena', 'Maria', 12, 1, 'No recomendaría este lugar para vacaciones'),
      ('Selene', 'Isabel', 13, 3, 'Un lugar encantador para unas vacaciones en familia'),
      ('Selene', 'Susana', 14, 4, 'Una experiencia maravillosa en mis vacaciones'),
      ('Esteban', 'Alejandro', 15, 5, 'El lugar perfecto para unas vacaciones de ensueño'),
      ('Esteban', 'Valeria', 16, 2, 'No quedé satisfecho con mi estancia'),
      ('Maria', 'Manu', 17, 2, 'No cumplió con mis expectativas de vacaciones'),
      ('Maria', 'Yese', 18, 3, 'Un lugar encantador para unas vacaciones en familia'),
      ('Susana', 'Toni', 19, 4, 'Una experiencia maravillosa en mis vacaciones'),
      ('Susana', 'Paco', 20, 5, 'Las mejores vacaciones que he tenido'),
      ('Manu', 'Susana', 1, 4, 'Excelente lugar para unas vacaciones'),
      ('Manu', 'Maria', 2, 2, 'No quedé satisfecho con mi estancia'),
      ('Oscar', 'Yese', 3, 1, 'No recomendaría este lugar para vacaciones'),
      ('Oscar', 'Selene', 4, 2, 'La experiencia no fue lo que esperaba'),
      ('Yese', 'Esteban', 5, 5, 'Un destino perfecto para unas vacaciones'),
      ('Yese', 'Manu', 6, 2, 'No quedé satisfecho con mi estancia'),
      ('Toni', 'Laura', 7, 4, 'Un lugar tranquilo y hermoso para descansar'),
      ('Toni', 'Paco', 8, 3, 'Las mejores vacaciones que he tenido'),
      ('Paco', 'Toni', 9, 4, 'No volvería a este lugar para vacacionar'),
      ('Paco', 'David', 10, 5, 'No cumplió con mis expectativas de vacaciones'),
      ('Elena', 'David', 11, 2, 'Un destino increíble para unas vacaciones inolvidables'),
      ('Elena', 'Maria', 12, 3, 'No recomendaría este lugar para vacaciones'),
      ('Selene', 'Isabel', 13, 3, 'Un lugar encantador para unas vacaciones en familia'),
      ('Selene', 'Susana', 14, 4, 'Una experiencia maravillosa en mis vacaciones'),
      ('Esteban', 'Alejandro', 15, 5, 'El lugar perfecto para unas vacaciones de ensueño'),
      ('Esteban', 'Valeria', 16, 1, 'No quedé satisfecho con mi estancia'),
      ('Maria', 'Manu', 17, 2, 'No cumplió con mis expectativas de vacaciones'),
      ('Maria', 'Yese', 18, 3, 'Un lugar encantador para unas vacaciones en familia'),
      ('Susana', 'Toni', 19, 4, 'Una experiencia maravillosa en mis vacaciones'),
      ('Susana', 'Paco', 20, 5, 'Las mejores vacaciones que he tenido')
      `
    );

    console.log('Rellenando tabla tenant_ratings');
    await connection.query(
      `
      INSERT INTO tenant_ratings (tenant, owner, renting_id, rating, comments)
      VALUES 
      ('Susana', 'Manu', 1, 4, 'Excelente inquilino, muy respetuoso'),
      ('Maria', 'Manu', 2, 5, 'El mejor inquilino que he tenido, muy ordenado y amable'),
      ('Yese', 'Oscar', 3, 1, 'No recomendaría a este inquilino, causó muchos problemas'),
      ('Selene', 'Oscar', 4, 2, 'La experiencia con este inquilino no fue la mejor'),
      ('Esteban', 'Yese', 5, 4, 'Un inquilino perfecto, cuidó muy bien de la propiedad'),
      ('Manu', 'Yese', 6, 2, 'No quedé satisfecho con este inquilino, dejó la casa en mal estado'),
      ('Laura', 'Toni', 7, 3, 'Un inquilino tranquilo y respetuoso, recomendado'),
      ('Paco', 'Toni', 8, 5, 'El mejor inquilino que he tenido, muy limpio y ordenado'),
      ('Toni', 'Paco', 9, 2, 'No volvería a alquilarle a este inquilino, causó muchos problemas'),
      ('David', 'Paco', 10, 2, 'No cumplió con las reglas de la casa, no lo recomendaría como inquilino'),
      ('David', 'Elena', 11, 5, 'Un inquilino increíble, cuidó la propiedad como si fuera suya'),
      ('Maria', 'Elena', 12, 1, 'No recomendaría a este inquilino, causó muchos problemas'),
      ('Isabel', 'Selene', 13, 3, 'Un inquilino encantador, muy respetuoso y ordenado'),
      ('Susana', 'Selene', 14, 4, 'Una experiencia maravillosa con este inquilino, muy amable y considerado'),
      ('Alejandro', 'Esteban', 15, 5, 'El inquilino perfecto, cuidó muy bien de la propiedad'),
      ('Valeria', 'Esteban', 16, 2, 'No quedé satisfecho con este inquilino, dejó la casa en mal estado'),
      ('Maria', 'Manu', 17, 2, 'No cumplió con las reglas de la casa, no lo recomendaría como inquilino'),
      ('Yese', 'Maria', 18, 3, 'Un inquilino encantador, muy respetuoso y ordenado'),
      ('Toni', 'Susana', 19, 4, 'Una experiencia maravillosa con este inquilino, muy amable y considerado'),
      ('Paco', 'Susana', 20, 5, 'El mejor inquilino que he tenido, muy limpio y ordenado'),
      ('Susana', 'Manu', 1, 4, 'Excelente inquilino, muy respetuoso'),
      ('Maria', 'Manu', 2, 2, 'No quedé satisfecho con este inquilino, dejó la casa en mal estado'),
      ('Yese', 'Oscar', 3, 1, 'No recomendaría a este inquilino, causó muchos problemas'),
      ('Selene', 'Oscar', 4, 2, 'La experiencia con este inquilino no fue la mejor'),
      ('Esteban', 'Yese', 5, 5, 'Un inquilino perfecto, cuidó muy bien de la propiedad'),
      ('Manu', 'Yese', 6, 2, 'No quedé satisfecho con este inquilino, dejó la casa en mal estado'),
      ('Laura', 'Toni', 7, 4, 'Un inquilino tranquilo y respetuoso, recomendado'),
      ('Paco', 'Toni', 8, 3, 'El mejor inquilino que he tenido, muy limpio y ordenado'),
      ('Toni', 'Paco', 9, 4, 'No volvería a alquilarle a este inquilino, causó muchos problemas'),
      ('David', 'Paco', 10, 5, 'No cumplió con las reglas de la casa, no lo recomendaría como inquilino'),
      ('David', 'Elena', 11, 2, 'Un inquilino increíble, cuidó la propiedad como si fuera suya'),
      ('Maria', 'Elena', 12, 3, 'No recomendaría a este inquilino, causó muchos problemas'),
      ('Isabel', 'Selene', 13, 3, 'Un inquilino encantador, muy respetuoso y ordenado'),
      ('Susana', 'Selene', 14, 4, 'Una experiencia maravillosa con este inquilino, muy amable y considerado'),
      ('Alejandro', 'Esteban', 15, 5, 'El inquilino perfecto, cuidó muy bien de la propiedad'),
      ('Valeria', 'Esteban', 16, 1, 'No quedé satisfecho con este inquilino, dejó la casa en mal estado'),
      ('Maria', 'Manu', 17, 2, 'No cumplió con las reglas de la casa, no lo recomendaría como inquilino'),
      ('Yese', 'Maria', 18, 3, 'Un inquilino encantador, muy respetuoso y ordenado'),
      ('Toni', 'Susana', 19, 4, 'Una experiencia maravillosa con este inquilino, muy amable y considerado'),
      ('Paco', 'Susana', 20, 5, 'El mejor inquilino que he tenido, muy limpio y ordenado')
      `
    );

    console.log('Rellenando tabla services');
    await connection.query(
      `
        INSERT INTO services (renting_id, elevator, hairdryer, ac, first_kit_aid, wifi, toaster, fully_equipped)
        VALUES 
        (1, 1, 1, 1, 1, 1, 1, 1),
        (2, 1, 1, 1, 1, 1, 1, 1),
        (3, 1, 1, 1, 1, 1, 1, 1),
        (4, 1, 1, 1, 1, 1, 1, 1),
        (5, 1, 1, 1, 1, 1, 1, 1),
        (6, 1, 1, 1, 1, 1, 1, 1),
        (7, 1, 1, 1, 1, 1, 1, 1),
        (8, 1, 1, 1, 1, 1, 1, 1),
        (9, 1, 1, 1, 1, 1, 1, 1),
        (10, 1, 1, 1, 1, 1, 1, 1),
        (11, 1, 1, 1, 1, 1, 1, 1),
        (12, 1, 1, 1, 1, 1, 1, 1),
        (13, 1, 1, 1, 1, 1, 1, 1),
        (14, 1, 1, 1, 1, 1, 1, 1),
        (15, 1, 1, 1, 1, 1, 1, 1),
        (16, 1, 1, 1, 1, 1, 1, 1),
        (17, 1, 1, 1, 1, 1, 1, 1),
        (18, 1, 1, 1, 1, 1, 1, 1),
        (19, 1, 1, 1, 1, 1, 1, 1),
        (20, 1, 1, 1, 1, 1, 1, 1)
      `
    );
  } catch (error) {
    console.error(error);
  } finally {
    if (connection) connection.release;
    process.exit();
  }
};

populate();
