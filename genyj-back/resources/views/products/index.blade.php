@php
    /** @var \Illuminate\Contracts\Pagination\LengthAwarePaginator|\App\Models\Product[] $products */
@endphp

@extends('layout.app')
@section('content')
    <div class="d-flex">
        <div class="col">
            <h2 class="display-5">Products</h2>
        </div>
        <div class="col">
            <a href="{{ route('products.create') }}" class="btn btn-primary float-end"><i class="fa fa-plus"></i> New Product</a>
        </div>
    </div>
    <table class="table table-hover">
        <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Description</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        @foreach($products as $key => $product)
            <tr>
                <td>{{ $key + 1 }}</td>
                <td>{{ $product->getTitle() }}</td>
                <td>{{ $product->getPrice() / 100 }} MAD</td>
                <td>{{ $product->getDiscount() }}%</td>
                <td>{{ $product->getDescription() }}</td>
                <td>
                    <a class="btn badge btn-secondary" href="{{ route('products.edit', ['product' => $product]) }}"><i class="fa fa-pencil"></i> Edit</a>
                    <form class="d-inline-block" method="POST" action="{{ route('products.delete', ['product' => $product]) }}">
                        @csrf
                        @method('DELETE')

                        <button type="submit" class="btn badge btn-danger"><i class="fa fa-trash"></i> Delete</button>
                    </form>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>

    {{ $products->links() }}
@endsection
