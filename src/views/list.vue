<template>
    <section class="container-fluid p-4">
        <div class="row dark">
            <div class="col-md-12">
                <div class="container-fluid p-4">
                    <h1>
                        Gestion des utilisateur
                    </h1>
                    <button type="button" class="btn btn-primary align-items-center pull-right m-2">
                      <a href="/ajouter" class="text-light"> Ajouter <i class="fa fa-plus fa-x"></i></a>

                    </button>
                    <!-- Button trigger modal -->
                </div>
                <table class="table table-sm" id="datatable">
                    <thead>
                        <tr>
                            <th>
                                id
                            </th>
                            <th>
                                nom
                            </th>
                            <th>
                                prenom
                            </th>
                            <th>
                                Modifier
                            </th>
                            <th>
                                supprimer
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="usr of user" v-bind:key="usr.id">
                            <td>
                                {{ usr.id }}
                            </td>
                            <td>
                                {{ usr.nom }}
                            </td>
                            <td>
                                {{ usr.prenom }}
                            </td>
                            <td>
                                
                                <button type="button" class="btn btn-success align-items-center">
                                   <a v-bind:href=route+usr.id class="text-light"><i class="fa fa-edit fa-x "></i></a> 
                                </button>
                            </td>
                            <td>
                                <button type="submit" class="btn btn-outline-danger"
                                    v-on:click="remusr(usr.id)"><i class="fa fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>

    </section>

</template>
<script>
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
    name: 'tab',
    data() {
        return {
            user: [{
                "nom": "",
                "prenom": "",
                "id": "",
            }
            ],
            v$: useValidate(),
            id: "",
            nom: "",
            prenom: "",
            route:"/modifier/"
        };
    },
    validattion() {
        return {
            nom: { required, minLength: minLength(3) },
            prenom: { required, minLength: minLength(3) },
            email: { required, email },
        };
    },
    async mounted() {
        let res = await axios.get('http://127.0.0.1:8000/api/users');
        this.user = res.data;
    },
    methods: {
        async getusr() {
            let res = await axios.get('http://127.0.0.1:8000/api/users');
            this.user = res.data;
        },
        async remusr(id) {
            //    let resp= await axios.get('http://localhost:3000/user/1');
            //    console.log(resp.data);
            axios.delete('http://127.0.0.1:8000/api/users/' + id);
            this.getusr();
        }

    },

};
</script>



<style>

</style>
