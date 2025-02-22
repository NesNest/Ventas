using Examen_Desarrollador.Entities;
using Microsoft.EntityFrameworkCore;

namespace Examen_Desarrollador.Data
{
    public class DBcontext: DbContext
    {
        //Constructor
        public DBcontext(DbContextOptions<DBcontext> options): base(options) {}
        //Entidades
        public DbSet<Entities.Cliente> Clientes { get; set; }
        public DbSet<Entities.Tienda> Tiendas { get; set; }
        public DbSet<Entities.Articulo> Articulos { get; set; }
        public DbSet<Entities.Articulo_tienda> TiendaArticulos { get; set; }
        public DbSet<Entities.Cliente_articulo> ClienteArticulos { get; set; }
        
        //Configuración de la clave compuesta
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
