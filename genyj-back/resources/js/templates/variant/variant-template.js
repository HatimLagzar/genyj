export default /*html*/`
<div class="mb-3 variant-item">
    <div class="row">
        <div class="col">
            <div class="form-group">
                <label for="">Size</label>
                <input name="variants[_ORDER_][size]" type="number" class="form-control">
            </div>
        </div>
        <div class="col">
            <div class="form-group">
                <label for="">Stock</label>
                <input name="variants[_ORDER_][stock]" type="number" class="form-control">
            </div>
        </div>
        <div class="col-1 d-flex justify-content-center align-items-end">
            <button type="button" role="button" class="btn btn-danger delete-variant"><i class="fa fa-trash"></i></button>
        </div>
    </div>
</div>
`;