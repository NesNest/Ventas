using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Examen_Desarrollador.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Articulos",
                columns: table => new
                {
                    Articulo_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Descripcion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Precio = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    Stock = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Articulos", x => x.Articulo_id);
                });

            migrationBuilder.CreateTable(
                name: "Clientes",
                columns: table => new
                {
                    Cliente_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Apellido = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Direccion = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clientes", x => x.Cliente_id);
                });

            migrationBuilder.CreateTable(
                name: "Tiendas",
                columns: table => new
                {
                    Tienda_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Direccion = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tiendas", x => x.Tienda_id);
                });

            migrationBuilder.CreateTable(
                name: "TiendaArticulos",
                columns: table => new
                {
                    Articulo_id = table.Column<int>(type: "int", nullable: false),
                    Tienda_id = table.Column<int>(type: "int", nullable: false),
                    Fecha = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TiendaArticulos", x => new { x.Articulo_id, x.Tienda_id });
                    table.ForeignKey(
                        name: "FK_TiendaArticulos_Articulos_Articulo_id",
                        column: x => x.Articulo_id,
                        principalTable: "Articulos",
                        principalColumn: "Articulo_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ClienteArticulos",
                columns: table => new
                {
                    Cliente_id = table.Column<int>(type: "int", nullable: false),
                    Articulo_id = table.Column<int>(type: "int", nullable: false),
                    Fecha = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClienteArticulos", x => new { x.Cliente_id, x.Articulo_id });
                    table.ForeignKey(
                        name: "FK_ClienteArticulos_Articulos_Articulo_id",
                        column: x => x.Articulo_id,
                        principalTable: "Articulos",
                        principalColumn: "Articulo_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ClienteArticulos_Clientes_Cliente_id",
                        column: x => x.Cliente_id,
                        principalTable: "Clientes",
                        principalColumn: "Cliente_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClienteArticulos_Articulo_id",
                table: "ClienteArticulos",
                column: "Articulo_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClienteArticulos");

            migrationBuilder.DropTable(
                name: "TiendaArticulos");

            migrationBuilder.DropTable(
                name: "Tiendas");

            migrationBuilder.DropTable(
                name: "Clientes");

            migrationBuilder.DropTable(
                name: "Articulos");
        }
    }
}
