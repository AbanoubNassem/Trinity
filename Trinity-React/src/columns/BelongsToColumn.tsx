import React from 'react';
import ColumnProps from '@/types/Props/Columns/ColumnProps';
import RelationshipColumn from '@/types/Models/Columns/RelationshipColumn';

const BelongsToColumn = ({ column, record }: ColumnProps<RelationshipColumn>) => {
    const relations = column.relationshipName?.split('.') ?? [];

    let lastRelation = record;

    for (let i = 0; i < relations.length; i++) {
        lastRelation = lastRelation[relations[i]];
    }

    const relationValue = lastRelation[column.title];

    return <>{relationValue}</>;
};

export default BelongsToColumn;
