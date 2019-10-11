import connection from '../config';

const db = connection;

const getUser = async (userID) => {
  const query = 'SELECT * FROM user WHERE user_id = ?';
  const result = await db.query(query, [userID]);
  if (result.length === 0) {
    return null;
  }

  return result[0];
};

const insertUser = ({
  userID, firstName, lastName, fullName, phone, email
}) => {
  const query = 'INSERT IGNORE INTO user VALUES (?,?,?,?,?,?)';
  return db.query(query, [userID, firstName, lastName, fullName, phone, email]);
};

const deleteUser = (userID) => {
  const query = 'DELETE user WHERE user_id=?';
  return db.query(query, [userID]);
};

const getAllUsers = () => db.query('SELECT * FROM user');

const getTeamsFromUser = (userID) => {
  const query = `
    SELECT
      team.team_id,
      team.team_logo,
      team.team_name,
      team.team_sport
    FROM user
    LEFT JOIN user_to_player
          on user.user_id = user_to_player.user_id
      LEFT JOIN player
          on user_to_player.player_id = player.player_id
      LEFT JOIN player_to_team
        on player.player_id = player_to_team.player_id
      LEFT JOIN team
        on player_to_team.team_id = team.team_id
    WHERE user.user_id = ?`;
  return db.query(query, [userID]);
};

const getUserPlayers = (userID) => {
  const query = `
  SELECT 
    user.user_full_name,
    player.full_name,
    user.email_address,
    player.email_address
  FROM user
    LEFT JOIN user_to_player
        on user.user_id = user_to_player.user_id
    LEFT JOIN player
        on player.player_id = user_to_player.player_id
  WHERE user.user_id = ?`;
  return db.query(query, [userID]);
};

export {
  getUser,
  insertUser,
  deleteUser,
  getAllUsers,
  getUserPlayers,
  getTeamsFromUser
};
