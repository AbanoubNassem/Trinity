import React from 'react';
import ColumnProps from '@/types/Props/Columns/ColumnProps';
import RelationshipColumnType from '@/types/Models/Columns/RelationshipColumnType';

const BelongsToColumn = ({ column, record }: ColumnProps<RelationshipColumnType>) => {
    const relations = column.relationshipName?.split('.') ?? [];

    let lastRelation = record;

    for (let i = 0; i < relations.length; i++) {
        lastRelation = lastRelation[relations[i]];
    }

    const relationValue = lastRelation[column.title];

    return <>{relationValue}</>;
};

export default BelongsToColumn;
