import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import DinoService from "../src/service.js";

async function getDinos(input1, input2) {
  let response = await DinoService.dinoIpsum(input1, input2);

  if (response.result === "success") {
    $(".result").text(response.body);
    console.log("getDinos works..?");
  }
}

$(document).ready(function () {
  $("form#dinos").submit(function (event) {
    event.preventDefault();
    const input1 = $("#paragraphs").val();
    const input2 = $("#words").val();
    getDinos(input1, input2);
  });
});
