const { createApp } = Vue;

createApp({
  data() {
    return {
      form: {
        actividad_1: 0.0,
        actividad_2: 0.0,
        actividad_3: 0.0,
        proyecto_final: 0.0,
      },
      submitted: false,
      promedio: 0.0,
      estado: "Reprobada",
    };
  },
  methods: {
    enviarForm() {
      // Asignar como formulario enviado
      this.submitted = true;
      // Calcular las notas
      const nota_1 = this.form.actividad_1 * 0.2;
      const nota_2 = this.form.actividad_2 * 0.2;
      const nota_3 = this.form.actividad_3 * 0.2;
      const nota_4 = this.form.proyecto_final * 0.4;
      // Calcular el promedio final (Suma de los porcentajes)
      this.promedio = nota_1 + nota_2 + nota_3 + nota_4;
      // Actualizar el estado de la asignatura
      if (this.promedio >= 6.0) {
        this.estado = "Aprobada";
      } else {
        this.estado = "Reprobada";
      }
      // Validar si el formulario ha sido llenado correctamente segun validaciones html
      const form = document.getElementById("notas_form");
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }
      // Si todo ha sido correcto, mostrar el modal con el resultado
      const modal = new bootstrap.Modal("#staticBackdrop");
      modal.show();
    },
    limpiarForm() {
      // Restablecer el formulario a los valores por defecto
      this.submitted = false;
      this.promedio = 0.0;
      this.form.actividad_1 = 0.0;
      this.form.actividad_2 = 0.0;
      this.form.actividad_3 = 0.0;
      this.form.proyecto_final = 0.0;
      this.estado = "Reprobada";
    },
  },
}).mount("#app");
