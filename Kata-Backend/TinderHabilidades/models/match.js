// models/match.js
module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    status: DataTypes.ENUM('propuesto', 'aceptado', 'rechazado'),
  });

  Match.associate = (models) => {
    Match.belongsTo(models.JobPost);
    Match.belongsTo(models.User, { as: 'freelancer', foreignKey: 'freelancer_id' });
  };

  return Match;
};

// models/quotation.js
module.exports = (sequelize, DataTypes) => {
  const Quotation = sequelize.define('Quotation', {
    price_total: DataTypes.DECIMAL,
    status: DataTypes.ENUM('pendiente', 'aceptada', 'rechazada'),
  });

  Quotation.associate = (models) => {
    Quotation.belongsTo(models.Match);
  };

  return Quotation;
};

// models/payment.js
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    amount: DataTypes.DECIMAL,
    type: DataTypes.ENUM('anticipo', 'saldo'),
    status: DataTypes.ENUM('pagado', 'pendiente'),
  });

  Payment.associate = (models) => {
    Payment.belongsTo(models.Quotation);
  };

  return Payment;
};

// models/appointment.js
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    location: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME,
  });

  Appointment.associate = (models) => {
    Appointment.belongsTo(models.Match);
  };

  return Appointment;
};

// models/serviceconfirmation.js
module.exports = (sequelize, DataTypes) => {
  const ServiceConfirmation = sequelize.define('ServiceConfirmation', {
    freelancer_confirmed: DataTypes.BOOLEAN,
    company_confirmed: DataTypes.BOOLEAN,
    rating: DataTypes.INTEGER,
  });

  ServiceConfirmation.associate = (models) => {
    ServiceConfirmation.belongsTo(models.Match);
  };

  return ServiceConfirmation;
};
