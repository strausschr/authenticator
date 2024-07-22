INSERT INTO users (id, password, username) VALUES (1, '$2b$10$Re4SZBtHM4DkSy/hRFUK.urvl0492BfxU1CYRisG1hzo.Nr/NkiBy', 'test');
INSERT INTO roles (id, name) VALUES (1, 'ROLE_ADMIN'), (2, 'ROLE_GAST');
INSERT INTO privileges (id, name) VALUES (1, 'WRITE'), (2, 'READ');
INSERT INTO users_roles (user_info_id, roles_id) VALUES (1, 2);
INSERT INTO roles_privileges (user_role_id, privileges_id) VALUES (1, 1), (1, 2), (2, 2);
