using Examen_Desarrollador.Entitys;
using Microsoft.EntityFrameworkCore;

namespace Examen_Desarrollador.Data
{
    public class DBcontext: DbContext
    {
        public DBcontext(DbContextOptions<DBcontext> options): base(options) {}
        //Entidades
        public DbSet<Entitys.Cliente> Clientes { get; set; }
        public DbSet<Entitys.Tienda> Tiendas { get; set; }
        public DbSet<Entitys.Articulo> Articulos { get; set; }
        public DbSet<Entitys.Articulo_tienda> TiendaArticulos { get; set; }
        public DbSet<Entitys.Cliente_articulo> ClienteArticulos { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configuración de la clave compuesta
            modelBuilder.Entity<Articulo_tienda>()
                .HasKey(at => new { at.Articulo_id, at.Tienda_id });
            modelBuilder.Entity<Cliente_articulo>()
                .HasKey(at => new { at.Cliente_id, at.Articulo_id });

        }
    }
}
