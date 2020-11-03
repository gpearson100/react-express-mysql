module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "miracle",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        field: "id",
      },
      guidMiracle: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: "guidMiracle",
      },
      pgName: {
        type: DataTypes.STRING(75),
        allowNull: true,
        field: "PgName",
      },
      pgDescription: {
        type: DataTypes.STRING(75),
        allowNull: true,
        field: "PgDescription",
      },
      pgNumber: {
        type: DataTypes.STRING(18),
        allowNull: true,
        field: "PgNumber",
      },
      fileName: {
        type: DataTypes.STRING(300),
        allowNull: true,
        field: "FileName",
      },
      fileHash: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "FileHash",
      },
      city: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: "City",
      },
      state: {
        type: DataTypes.CHAR(2),
        allowNull: true,
        defaultValue: "TX",
        field: "State",
      },
      totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "TotalPrice",
      },
      totalWeight: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "TotalWeight",
      },
      ada: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "Ada",
      },
      totalAdaCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "TotalAdaCount",
      },
      totalChildCapacity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "TotalChildCapacity",
      },
      installationDate: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "InstallationDate",
      },
      isIpemaCertified: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "IsIpemaCertified",
      },
      protectiveHeight: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "ProtectiveHeight",
      },
      protectiveWidth: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "ProtectiveWidth",
      },
      groundSpaceHeight: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "GroundSpaceHeight",
      },
      groundSpaceWidth: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "GroundSpaceWidth",
      },
      drawnBy: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: "DrawnBy",
      },
      ts: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        field: "ts",
      },
      fileCreationTime: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "FileCreationTime",
      },
      fileLastEditedTime: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "FileLastEditedTime",
      },
    },
    {
      tableName: "miracle",
    }
  );
};
