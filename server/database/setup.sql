DROP TABLE IF EXISTS notes;

CREATE TABLE notes (
  note_id INT GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(100) NOT NULL,
  content VARCHAR(1000) NOT NULL,
  PRIMARY KEY (note_id)
);


INSERT INTO notes
  (title, author, content)
VALUES
  ('Tech note', 'Diego Ramos', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
  ('Sample note', 'Becky', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu cursus vitae congue mauris rhoncus aenean. Nulla at volutpat diam ut venenatis. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Diam phasellus vestibulum lorem sed risus. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Amet est placerat in egestas erat imperdiet sed euismod nisi. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Diam phasellus vestibulum lorem sed risus ultricies. Euismod lacinia at quis risus sed vulputate odio ut.'),
  ('Linkedin post idea', 'Diego', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est sit amet facilisis magna etiam. Luctus accumsan tortor posuere ac ut consequat. Vitae turpis massa sed elementum tempus egestas sed sed risus. Sed adipiscing diam donec adipiscing tristique risus. Id donec ultrices tincidunt arcu. Urna molestie at elementum eu facilisis sed. Sem fringilla ut morbi tincidunt augue interdum. Lacinia quis vel eros donec. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Volutpat lacus laoreet non curabitur gravida arcu. Aenean sed adipiscing diam donec adipiscing tristique.'),
  ('Twitter', 'Diego', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Amet dictum sit amet justo. Malesuada proin libero nunc consequat interdum varius. Quam adipiscing vitae proin sagittis. Amet volutpat consequat mauris nunc. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Ut tellus elementum sagittis vitae et leo duis. Elementum sagittis vitae et leo. Arcu dui vivamus arcu felis bibendum. Quam pellentesque nec nam aliquam sem et tortor. Purus viverra accumsan in nisl nisi scelerisque. Nunc non blandit massa enim. Consectetur a erat nam at. Fusce ut placerat orci nulla. Ut sem nulla pharetra diam. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Amet nulla facilisi morbi tempus. Viverra adipiscing at in tellus integer feugiat. Leo in vitae turpis massa sed elementum tempus egestas sed.')
