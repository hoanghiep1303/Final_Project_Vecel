document.addEventListener("DOMContentLoaded", function () {
  // Delete food
  var productId;
  var deleteFoodForm = document.forms["delete-food-form"];

  $("#deletefoodModal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget);
    productId = button.data("id");
  });
  $("#btn-delete-food").click(function () {
    deleteFoodForm.action = "/product/delete/" + productId;
    deleteFoodForm.submit();
  });

  //Permantly delete food
  var forceProductId;
  var forceDeleteFoodForm = document.forms["permantly-delete-food-form"];

  $("#force-delete-food").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget);
    forceProductId = button.data("id");
  });

  $("#btn-force-delete-food").click(function () {
    forceDeleteFoodForm.action = "/product/force/" + forceProductId;
    forceDeleteFoodForm.submit();
  });

  //Restore food
  var restoreProductId;
  var restoreFoodForm = document.forms["restore-food-form"];

  $("#restore-food").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget);
    restoreProductId = button.data("id");
  });
  $("#btn-restore-food").click(function () {
    restoreFoodForm.action = "/product/" + restoreProductId + "/restore";
    //alert(restoreFoodForm.action);
    restoreFoodForm.submit();
  });

  // Get ID of category to modal for editing
  $(document).on("click", ".open-modal-edit-category", function () {
    var categoryId = $(this).data("id");
    var categoryName = $("#" + categoryId + "-name").text();
    var categoryImage = $("#" + categoryId + "-image").attr("src");

    $("#edit-category-name").attr("value", categoryName);
    document.getElementById("editCategoryLabel").innerHTML =
      "Edit Category <b> " + categoryName + "</b>";
    document
      .getElementById("edit-category-image")
      .setAttribute("src", categoryImage);

    var editCategoryForm = document.forms["edit-category-form"];
    editCategoryForm.setAttribute("action", "/category/update/" + categoryId);
  });

  // Get ID of product to modal for editing
  $(document).on("click", ".open-modal-edit-product", function () {
    var productId = $(this).data("id");
    var productName = $("#" + productId + "-name").text();
    // var productCategory = $('#' + productId + '-category-name').text();
    var productDesc = $("#" + productId + "-desc").text();
    var productPrice = $("#" + productId + "-price").text();
    var productImage = $("#" + productId + "-image").attr("src");

    document.getElementById("edit-product-name").value = productName;
    // document.getElementById('edit-product-category-name').value = productCategory;
    document.getElementById("edit-product-desc").value = productDesc;
    document.getElementById("edit-product-price").value = productPrice;
    document.getElementById("editProductLabel").innerHTML =
      "Edit Food <b> " + productName + "</b>";
    document
      .getElementById("edit-preview-image")
      .setAttribute("src", productImage);

    var editProductForm = document.forms["edit-product-form"];
    editProductForm.setAttribute("action", "/product/update/" + productId);

    var editCategoryOptions = document.getElementsByClassName(
      "edit-category-options"
    );
    for (var i = 0; i < editCategoryOptions.length; i++) {
      if (editCategoryOptions[i].innerHTML == categoryName) {
        var selectedOptions = editCategoryOptions[i];
        selectedOptions.setAttribute("selected", "selected");
        break;
      }
    }
  });

  // Delete category
  var categoryId;
  var deleteCategoryForm = document.forms["delete-category-form"];

  $("#deletecategoryModal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget);
    categoryId = button.data("id");
  });
  $("#btn-delete-category").click(function () {
    deleteCategoryForm.action = "/category/delete/" + categoryId;
    deleteCategoryForm.submit();
  });

  //Permantly delete category
  var forceCategoryId;
  var forceDeleteCategoryForm = document.forms["permantly-delete-category-form"];

  $("#force-delete-category").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget);
    forceCategoryId = button.data("id");
  });

  $("#btn-force-delete-category").click(function () {
    forceDeleteCategoryForm.action = "/category/force/" + forceCategoryId;
    forceDeleteCategoryForm.submit();
  });

  //Restore category
  var restoreCategoryId;
  var restoreCategoryForm = document.forms["restore-category-form"];

  $("#restore-category").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget);
    restoreCategoryId = button.data("id");
  });
  $("#btn-restore-category").click(function () {
    restoreCategoryForm.action = "/category/" + restoreCategoryId + "/restore";
    //alert(restoreCategoryForm.action);
    restoreCategoryForm.submit();
  });
});

// Click change ava btn
$('#change-avatar-btn').click(() => {
  $('#file-avatar').trigger('click');
})
